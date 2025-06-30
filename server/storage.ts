import {
  users,
  employees,
  type User,
  type InsertUser,
  type RegisterUser,
  type Employee,
  type InsertEmployee,
  type UpdateEmployee,
} from "@shared/schema";
import { db } from "./db";
import { eq, ilike, or, desc, asc } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations for local auth
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: RegisterUser): Promise<User>;
  
  // Employee operations
  getAllEmployees(): Promise<Employee[]>;
  getEmployee(id: number): Promise<Employee | undefined>;
  createEmployee(employee: InsertEmployee): Promise<Employee>;
  updateEmployee(id: number, employee: Partial<UpdateEmployee>): Promise<Employee>;
  deleteEmployee(id: number): Promise<void>;
  searchEmployees(query: string, department?: string): Promise<Employee[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations for local auth
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(userData: RegisterUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .returning();
    return user;
  }

  // Employee operations
  async getAllEmployees(): Promise<Employee[]> {
    return await db
      .select()
      .from(employees)
      .orderBy(desc(employees.createdAt));
  }

  async getEmployee(id: number): Promise<Employee | undefined> {
    const [employee] = await db
      .select()
      .from(employees)
      .where(eq(employees.id, id));
    return employee;
  }

  async createEmployee(employeeData: InsertEmployee): Promise<Employee> {
    // Generate employee ID
    const count = await db.$count(employees);
    const employeeId = `EMP-${String(count + 1).padStart(3, '0')}`;

    const [employee] = await db
      .insert(employees)
      .values({
        ...employeeData,
        employeeId,
        salary: employeeData.salary ? employeeData.salary : null,
      })
      .returning();
    return employee;
  }

  async updateEmployee(id: number, employeeData: Partial<UpdateEmployee>): Promise<Employee> {
    const [employee] = await db
      .update(employees)
      .set({
        ...employeeData,
        updatedAt: new Date(),
      })
      .where(eq(employees.id, id))
      .returning();
    return employee;
  }

  async deleteEmployee(id: number): Promise<void> {
    await db.delete(employees).where(eq(employees.id, id));
  }

  async searchEmployees(query: string, department?: string): Promise<Employee[]> {
    let whereClause = or(
      ilike(employees.name, `%${query}%`),
      ilike(employees.email, `%${query}%`),
      ilike(employees.position, `%${query}%`)
    );

    if (department) {
      whereClause = eq(employees.department, department);
      if (query) {
        whereClause = eq(employees.department, department);
      }
    }

    return await db
      .select()
      .from(employees)
      .where(whereClause)
      .orderBy(desc(employees.createdAt));
  }
}

export const storage = new DatabaseStorage();
