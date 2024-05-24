# Taskify
Taskify is a web-based productivity app to help you organize your tasks and get them done more efficiently.

## Tech Stack
React, TypeScript, Firebase Authentication, Supabase Postgres, Tailwind CSS

## How It Works
1. Users sign up/login with a Google account. The user's data is stored in the database.
2. The app queries the database for all the user's tasks.
3. Users can create, update or delete tasks. These changes are reflected in the database.

## Lessons Learned
I learned TypeScript to improve the development process. 

I learned to use Firebase for user authentication. 

I used a Postgres database to store and query data, and the Supabase SDK to perform CRUD operations on the database.

#

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# vite-todo
