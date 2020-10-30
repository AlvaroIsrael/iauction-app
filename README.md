<h1 align="center">
    👨🏻‍⚖️ iAuction App
    A auction app made with Node and Typescript.
</h1>

Made with ❤️ by Alvaro Israel 👏🏻 [Get in touch!](https://www.linkedin.com/in/alvaroisraeldesenvolvedor/)

## 📌 What is it?

This is just a concept app to show node.js skills. It was part of a code challenge given to me by Graff Tecnologia enterprise.
It suppose to be an auction simulation app of some sort and it should be able to perform the following actions:

- Create, update, delete an auctions item and also list all item in the system. A item must have a name and value.
- Create, update, delete a bidder and also list all bidders in the system. A bitter must have name and age.
- A Bidder should be able to bet on an item.

This app uses SQLite as database to persist data.

### 🗃 Business guidelines

- A bet can never be made if it's value is lower than the current item's highest bet value.

## 🏆 Technologies used

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJs](https://expressjs.com/)
- [JestJs](https://jestjs.io/)
- [SQLite](https://www.sqlite.org/)


## 💻 How to run?

This project uses NodeJs with Typescript, so in order for it to work, frist navigate inside the backend's project folder and run npm install to download the proper dependencies:
```
cd iauction-backend
npm install
or
yarn install
```

After that, we can run the app by running the following command:
```
npm dev:server
or
yarn dev:server
```

The above commands are just a package.json's script. In case you want you can also run the full commmand by running the following:
```
ts-node-dev --inspect --transpile-only --ignore-watch node_modules src/server.ts
```

## 🛠 How to test?

This project uses JestJs with coverage reports as a test library.
To run unity tests run the following commands:
```
npm test
or
yarn test
```
Those are also just a package.json's script. If for some reason you want to run the full command type the following:
```
jest --coverage --watchAll=false
```

## 📝 Licence

This is under GPL v3 license. See [LICENSE](LICENSE.md) for more details.