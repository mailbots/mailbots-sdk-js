# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the MailBots JavaScript SDK (`@mailbots/mailbots-sdk`) - a client library for interacting with the MailBots API. It's designed to work in both Node.js server environments and browser contexts.

## Development Commands

### Testing
- `npm test` - Run tests with mocked API requests (default)
- `npm run test:live` - Run tests against live API (requires .env configuration)
- `npm run test:rebuild` - Rebuild mock responses from live API calls

### Building
- `npm run build` - Build all targets (node, browser, and dist)
- `npm run build:watch` - Watch mode for node and browser builds
- `npm run build:node` - Build Node.js version only (outputs to lib-node/)
- `npm run build:browser` - Build browser version only (outputs to lib-browser/)
- `npm run build:dist` - Build webpack distribution (outputs to dist/)

### Documentation
- `npm run build:docs` - Generate and deploy documentation
- `npm run dev:docs` - Serve documentation in watch mode

## Architecture

### Dual Environment Support
The SDK uses conditional compilation to support both server and browser environments:
- Server builds include OAuth2 functionality via `simple-oauth2`
- Browser builds exclude server-only features for security
- Environment detection via `process.env.SERVER` flag in Babel configuration

### Core Structure
- **MailBotsClient**: Main client class that aggregates all API modules
- **API Modules**: Separate modules for different functionality areas:
  - `tasks.js` - Task management (create, update, delete, trigger)
  - `auth.js` - OAuth2 authentication flows
  - `users.js` - User management
  - `people.js` - People/contacts management
  - `webhooks.js` - Webhook utilities
  - `mailbots.js` - MailBot-specific operations
  - `util.js` - Shared utilities and request handling

### Client Instantiation Patterns
1. **Direct instantiation**: `new MailBotsClient(config)`
2. **From bot webhook**: `MailBotsClient.fromBot(bot)` - factory method that extracts configuration and access token from webhook bot object

### API Communication
- Uses Axios for HTTP requests
- Supports both callbacks and promises/async-await
- Bearer token authentication
- Distributed tracing via `x-mailbots-sessionid` header

## Key Features

### Task Management
Complete CRUD operations for MailBots tasks including:
- Creating tasks with email content
- Updating task properties and scheduling
- Triggering tasks programmatically
- Email sending with automatic task creation

### Authentication
- OAuth2 authorization code flow (server-only)
- Manual access token setting for webhook contexts
- Secure client secret handling (server environments only)

### Testing Setup
- Uses Nock for HTTP mocking
- Mocked requests match values in .env.example
- Live testing requires actual MailBot configurations in .env

## Build System

### Babel Configuration
- Transforms ES6+ for broad compatibility
- Conditional compilation removes server-specific code for browser builds
- Dead code elimination for optimized output

### Output Targets
- **lib-node/**: CommonJS for Node.js (includes OAuth2)
- **lib-browser/**: Browser-compatible build (excludes server features)
- **dist/**: Webpack bundle for direct browser inclusion
- **typings/**: TypeScript definitions

## Environment Variables

Testing requires configuration of MailBot credentials:
- Client ID, secret, redirect URI, scope
- Access tokens for authenticated requests
- API host configuration for different environments