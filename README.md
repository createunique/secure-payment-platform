# Secure Payment Platform

A full-featured, scalable, and secure web application built on React and Node.js. This project integrates industry-standard payment gateways (Stripe, PayPal, etc.) along with Firebase authentication, PCI DSS compliance, encryption, and tokenization best practices. The project follows a modular, microservices-inspired architecture ensuring maintainability and scalability.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Secure Transactions:** Implements bank-grade encryption and security best practices for payments.
- **User Authentication:** Uses Firebase authentication through the [`AuthContext`](src/contexts/AuthContext.tsx).
- **UI Components:** Reusable components such as the [`Button`](src/components/ui/Button.tsx) component with multiple variants and sizes.
- **Responsive Design:** Built using Tailwind CSS configured in [`tailwind.config.js`](tailwind.config.js) ensuring responsive layouts.
- **Routing:** Client-side routing via React Router for pages like Login, Signup, Home, etc.
- **State Management:** Uses React Context API ([`CartContext`](src/contexts/CartContext.tsx)) for managing shopping cart state.
- **Modern Tooling:** Bundled with [Vite](vite.config.ts), linted using ESLint ([`eslint.config.js`](eslint.config.js)), and uses TypeScript for type safety.

## Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS, React Router, Vite
- **Authentication:** Firebase (configured in [`lib/firebase.ts`](lib/firebase.ts))
- **Testing:** Vitest, React Testing Library
- **Code Quality:** ESLint with plugins for React and TypeScript
- **Version Control:** Git
- **Deployment:** Configured for static builds with Vite (see [`vite.config.ts`](vite.config.ts))

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/createunique/secure-payment-platform.git
   cd secure-payment-platform
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file at the project root with your Firebase configuration:

   ```
   REACT_APP_FIREBASE_API_KEY=<your-api-key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
   REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
   REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
   REACT_APP_FIREBASE_APP_ID=<your-app-id>
   ```

## Configuration

- **Vite:** Uses [`vite.config.ts`](vite.config.ts) for build and development settings with module aliasing (e.g., `@/` for `src/`).
- **TypeScript:** Configured via [`tsconfig.json`](tsconfig.json), [`tsconfig.app.json`](tsconfig.app.json), and [`tsconfig.node.json`](tsconfig.node.json).
- **Tailwind CSS:** Configured in [`tailwind.config.js`](tailwind.config.js) and integrated via [`postcss.config.js`](postcss.config.js).
- **Firebase:** Initialization and authentication are handled by [`lib/firebase.ts`](lib/firebase.ts).

## Project Structure

```
secure-payment-platform/
├── .gitignore
├── LICENSE
├── package.json
├── README.md
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── lib/
│   └── firebase.ts
├── src/
│   ├── App.tsx               // Main application component
│   ├── index.css             // Global styles (includes Tailwind CSS directives)
│   ├── main.tsx              // App entry point
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── Layout.tsx        // Layout component with navigation and footer ([see here](src/components/Layout.tsx))
│   │   └── ui/
│   │       └── Button.tsx    // Reusable Button component ([see here](src/components/ui/Button.tsx))
│   ├── contexts/
│   │   ├── AuthContext.tsx   // Handles Firebase authentication ([see here](src/contexts/AuthContext.tsx))
│   │   └── CartContext.tsx   // Manages shopping cart state ([see here](src/contexts/CartContext.tsx))
│   ├── lib/
│   │   └── utils.ts          // Utility functions such as [`cn`](src/lib/utils.ts)
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   └── ...               // Other route-specific pages
│   └── types/
│       └── index.ts          // Shared TypeScript types ([see here](src/types/index.ts))
└── supabase/
    └── migrations/
        └── 20250408041824_silver_queen.sql  // Database migration for schema setup
```

## Development

- **Local Development:**  
  Run the development server by executing:
  ```sh
  npm run dev
  ```
  This uses Vite for fast module reloading and build speed.

- **Linting:**  
  Run ESLint to catch issues by:
  ```sh
  npm run lint
  ```

- **Preview:**  
  To preview the production build locally:
  ```sh
  npm run preview
  ```

## Testing

- **Unit & Integration Tests:**  
  Run tests with:
  ```sh
  npm run test
  ```
  Tests are configured using Vitest along with React Testing Library.

## Contributing

Contributions are welcome. To contribute:  
1. Fork the repository.  
2. Create a new branch for your feature or fix.  
3. Write tests and ensure all linting checks pass.  
4. Submit a pull request explaining your changes.

Please follow the project's existing coding conventions and document any new features.

## License

This project is licensed under the [MIT License](LICENSE).

---

