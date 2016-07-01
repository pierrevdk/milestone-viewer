# Production

## Hack (without dev dependencies)

```shell
npm install
npm run dev
```

http://localhost:8080

# Hack

## Linter / ESLint
We use here a custom airbnb based eslinter with React plugin. You can find the configurations in the [.eslintrc.json](./eslintrc.json).

You can run the linter by using:
```shell
npm run eslint
```

## Build with webpack using

You will need all dev dependencies: ```npm install```

Building scripts are defined to be used as npm scripts:

* Use ```npm run build``` to build once using webpack

* Use ```npm run build:watch``` to build again each time a change is detected

The webpack configutions are defined in the [webpack.config.js](./webpack.config.js).
