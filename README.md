# Preview
![app-filter-desktop](https://github.com/brenoob/app-filter/assets/57812022/1f516956-77f1-475d-ae08-7b6ea94057f8)
![app-filter-desktop-2](https://github.com/brenoob/app-filter/assets/57812022/f78b7c32-9a3e-4f43-89ee-45c0de95955d)
![app-filter-mobile](https://github.com/brenoob/app-filter/assets/57812022/9bfe49c1-1840-4059-9d45-824c0939a93e)
![app-filter-mobile-2](https://github.com/brenoob/app-filter/assets/57812022/f0925ee4-5f71-46ae-ae74-a13567ed1e16)
![app-filter-mobile-3](https://github.com/brenoob/app-filter/assets/57812022/9c7e3376-f2d7-4210-b7aa-f58c0a47cdfb)

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
