# RebelWorks Mini Project

[Next.js](https://nextjs.org/) boilerplate based on the [official repo's examples](https://github.com/vercel/next.js/tree/canary/examples), best practices, and popular libraries in the developer community.


## Getting Started

1. Clone this repo.
2. Run `yarn install` to install dependencies.
3. Configure environment variables.
   - Create `.env.local` file (see [official docs](https://nextjs.org/docs/basic-features/environment-variables)).
   - Configure `env.js` file.
4. Run `yarn run dev`.


## Scripts

- `yarn run dev` - Run development mode
- `yarn run build` - Build the application for production
- `yarn run start` - Start a Next.js production server (require `yarn run build` first)
- `yarn run lint` - Check codes from ESLint errors
- `yarn run lint:fix` - Fix codes from ESLint errors


## File Structure

```raw
.
├── 📂 public/                 Public files (e.g. favicon)
├── 📂 src/
│   ├── 📂 api/                API-related functions
│   ├── ⚛️ components/         Common reusable components
│   ├── ⚛️ hooks/              Custom hooks
│   ├── ⚛️ pages/              Next.js page components
│   ├── 📂 utils/              Utility functions
│   └── Provider.jsx            Provider Wrapper eg. Redux Provider, Theme Provider ect.
├── .editorconfig               EditorConfig file
├── .env.local                  Put environment variables here
├── .eslintignore
├── .eslintrc.json              ESLint configuration
├── .gitattributes
├── .gitignore
├── next.config.js              Next.js configuration
├── package.json
├── postcss.config.js           PostCSS configuration
└── tailwind.config.js          Tailwind configuration

Notes:
📂: Folder
⚛️: React-related folder
```

## Tools

- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Server State Management**: [React Query](https://react-query.tanstack.com/)
- **Data Fetching**: [axios](https://github.com/axios/axios)
- **className Utility**: [clsx](https://www.npmjs.com/package/clsx)
- **Fallback UI**: use built-in React [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- **Linting**:
  - Ecma Version: 12 (es2021) 
  - Plugin: Airbnb, react, jsx-a11y
