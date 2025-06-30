# Local Setup Guide for Employee Management System

This guide will help you set up and run the Employee Management System on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **PostgreSQL** (version 12 or higher)
   - Download from: https://postgresql.org/downloads/
   - Verify installation: `psql --version`

3. **Git** (to clone the repository)
   - Download from: https://git-scm.com/

## Step 1: Clone and Setup the Project

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd employee-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Step 2: Database Setup

1. **Start PostgreSQL service** on your machine
   - On Windows: Start through Services or PostgreSQL application
   - On macOS: `brew services start postgresql`
   - On Linux: `sudo systemctl start postgresql`

2. **Create a new database**:
   ```bash
   createdb employee_management
   ```
   
   Or using psql:
   ```sql
   psql -U postgres
   CREATE DATABASE employee_management;
   \q
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/employee_management
   SESSION_SECRET=your-secret-key-change-this-in-production
   NODE_ENV=development
   ```
   
   Replace `username` and `password` with your PostgreSQL credentials.

## Step 3: Initialize the Database

Run the database migration to create all necessary tables:

```bash
npm run db:push
```

This will create the following tables:
- `users` - For administrator accounts
- `employees` - For employee records
- `sessions` - For user session management

## Step 4: Start the Application

Start the development server:

```bash
npm run dev
```

The application will be available at: **http://localhost:5000**

## Step 5: Create Your First Admin Account

1. Open your web browser and navigate to `http://localhost:5000`
2. You'll see the authentication page
3. Click "Need to create an admin account? Register here"
4. Fill in the registration form:
   - First Name: Your first name
   - Last Name: Your last name
   - Email: Your email address
   - Password: A secure password (minimum 6 characters)
5. Click "Create Administrator Account"

## Step 6: Start Managing Employees

Once logged in, you can:

1. **Add Employees**: Click the "Add Employee" button to create new employee records
2. **View Employees**: See all employees in a professional table format
3. **Search & Filter**: Use the search bar and department filter to find specific employees
4. **Edit Employees**: Click the edit icon to update employee information
5. **Delete Employees**: Click the delete icon to remove employee records

## Features Available

### Employee Management
- ✅ Complete CRUD operations (Create, Read, Update, Delete)
- ✅ Form validation for all fields
- ✅ Search functionality
- ✅ Department filtering
- ✅ Professional dashboard interface

### Authentication & Security
- ✅ Secure password hashing
- ✅ Session-based authentication
- ✅ Admin-only access
- ✅ Multiple administrator support

### User Interface
- ✅ Modern, responsive design
- ✅ Professional forms with validation
- ✅ Real-time search and filtering
- ✅ Toast notifications for user feedback
- ✅ Confirmation dialogs for destructive actions

## Common Issues and Solutions

### Database Connection Issues
- Make sure PostgreSQL is running: `pg_isready`
- Check your DATABASE_URL in the .env file
- Verify database exists: `psql -l`

### Port Already in Use
- Change the port in server/index.ts if needed
- Kill existing processes: `pkill -f node`

### Missing Dependencies
- Delete node_modules and package-lock.json
- Run `npm install` again

## Development Commands

- `npm run dev` - Start development server
- `npm run db:push` - Apply database schema changes
- `npm run build` - Build for production
- `npm start` - Start production server

## File Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions
├── server/           # Backend Express application
│   ├── routes.ts     # API endpoints
│   ├── storage.ts    # Database operations
│   ├── localAuth.ts  # Authentication logic
│   └── db.ts         # Database connection
├── shared/           # Shared types and schemas
│   └── schema.ts     # Database schema and validation
└── package.json      # Dependencies and scripts
```

## Next Steps

1. Add more administrators by using the registration form
2. Start adding your employee data
3. Customize the application as needed for your organization
4. Set up production deployment when ready

## Support

If you encounter any issues during setup, please check:
1. All prerequisites are installed correctly
2. Database is running and accessible
3. Environment variables are set properly
4. No port conflicts exist

The application includes comprehensive error handling and validation to guide you through any issues.