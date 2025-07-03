# Employee Management System

## Overview

This is a full-stack employee management system built with modern web technologies. The application provides a secure, admin-only interface for managing employee records with comprehensive CRUD operations, search functionality, and professional UI components.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing
- **TanStack React Query** for server state management and data fetching
- **shadcn/ui** component library built on Radix UI primitives for consistent, accessible UI
- **Tailwind CSS** for utility-first styling with CSS variables for theming

### Backend Architecture
- **Express.js** server with TypeScript for API endpoints
- **Drizzle ORM** with PostgreSQL dialect for type-safe database operations
- **PostgreSQL** database for data storage and session management
- **Session-based authentication** using connect-pg-simple for PostgreSQL session storage

### Authentication System
- **Local authentication** with email/password login and registration
- **bcryptjs** for secure password hashing
- **Session management** with PostgreSQL-backed storage for scalability
- **Multi-administrator support** allowing registration of multiple admin accounts
- Admin-only access pattern with automatic redirects for unauthorized users

## Key Components

### Database Schema
- **Users table**: Stores admin user profiles from Replit OIDC
- **Employees table**: Core employee data with comprehensive fields (ID, name, email, department, position, start date, status, salary, contact info)
- **Sessions table**: PostgreSQL-backed session storage for authentication state

### API Structure
- **Authentication endpoints**: `/api/auth/user`, `/api/login` for OIDC flow
- **Employee CRUD endpoints**: Full REST API for employee management
- **Search functionality**: Query-based employee filtering by name and department
- Middleware for authentication enforcement on all protected routes

### Frontend Features
- **Responsive dashboard** with tabbed interface
- **Real-time search and filtering** with department-based filters
- **Modal-based forms** for adding and editing employees with validation
- **Confirmation dialogs** for destructive operations
- **Toast notifications** for user feedback
- **Professional data tables** with comprehensive employee information display

## Data Flow

1. **Authentication Flow**: Replit OIDC → Passport middleware → Session creation → Dashboard access
2. **Employee Operations**: UI forms → React Query mutations → Express API → Drizzle ORM → PostgreSQL
3. **Data Fetching**: Component mount → React Query → API endpoints → Database queries → UI updates
4. **Real-time Updates**: Mutations trigger automatic query invalidation and UI refresh

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client optimized for edge environments
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect support
- **openid-client**: OIDC authentication client for Replit integration
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI Dependencies
- **@radix-ui/***: Accessible, unstyled UI primitives for consistent component behavior
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **react-hook-form**: Performant forms with easy validation
- **zod**: TypeScript-first schema validation for forms and API data

## Deployment Strategy

### Development Environment
- **Vite development server** with hot module replacement for rapid iteration
- **TypeScript compilation** with strict type checking enabled
- **Environment variable management** for database connections and authentication secrets

### Production Build
- **Vite production build** generating optimized static assets
- **ESBuild server compilation** for Node.js backend bundle
- **Static file serving** through Express for single-page application deployment
- **Database migrations** managed through Drizzle Kit

### Database Management
- **Drizzle Kit** for schema migrations and database synchronization
- **Connection pooling** through Neon's serverless client for optimal performance
- **Environment-based configuration** for seamless development to production transitions

## Changelog
```
Changelog:
- June 30, 2025. Added multi-administrator registration and login
- June 30, 2025. Created comprehensive local setup documentation
- June 30, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```