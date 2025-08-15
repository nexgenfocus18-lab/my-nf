# Overview

This is a full-stack web application built with React, Express.js, and TypeScript. The project appears to be for "Nexgen Focus - School of Skills for the Next Generation," which is an educational platform or skills training website. The application features a modern UI built with shadcn/ui components, Tailwind CSS for styling, and includes database integration with Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **Session Management**: express-session with connect-pg-simple for PostgreSQL session storage

## Database & ORM
- **Database**: PostgreSQL (configured for use with Neon Database serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema**: Type-safe database schemas with Zod integration
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Development Tools
- **Bundler**: Vite for frontend development and building
- **Package Manager**: npm with lockfile version 3
- **Code Quality**: TypeScript strict mode enabled
- **Hot Reload**: Vite HMR with custom error overlay for Replit environment

## Project Structure
- `/client` - React frontend application
- `/server` - Express.js backend API
- `/shared` - Shared TypeScript types and schemas
- `/migrations` - Database migration files
- Component organization follows atomic design with `/components/ui` for reusable components

## Design System
- Custom color palette with CSS custom properties
- Neutral base color scheme with blue accent colors
- Responsive design with mobile-first approach
- Consistent spacing and typography using Tailwind utilities

# External Dependencies

## UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component primitives (@radix-ui/react-*)
- **Lucide React**: Icon library
- **class-variance-authority**: Type-safe component variants
- **clsx & tailwind-merge**: Conditional CSS class utilities

## Animation & Interaction
- **Framer Motion**: Animation library for React
- **Embla Carousel**: Carousel/slider component
- **cmdk**: Command palette component

## Data & Forms
- **TanStack Query**: Server state management
- **React Hook Form**: Form handling and validation
- **Zod**: Schema validation
- **date-fns**: Date manipulation utilities

## Database & Backend
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit
- **connect-pg-simple**: PostgreSQL session store for Express

## Development & Build
- **Vite**: Frontend build tool and dev server
- **esbuild**: JavaScript/TypeScript bundler
- **tsx**: TypeScript execution engine
- **PostCSS & Autoprefixer**: CSS processing

## Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific tooling integration