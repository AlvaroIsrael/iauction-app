<h1 align="center">
    👨🏻‍⚖️ iAuction App<br>
    <img  alt="iCar App" width="575" height="721" src="https://github.com/AlvaroIsrael/iauction-app/blob/main/iauction-frontend/src/img/iauction.png"/>
</h1>

## 📌 What is it?

This is just a concept app to show node.js skills. It was part of a code challenge given to me by Graff Tecnologia enterprise.
It suppose to be an auction simulation app of some sort and it should be able to perform the following actions:

- Create, update, delete an auctions item and also list all item in the system. A item must have a name and value.
- Create, update, delete a bidder and also list all bidders in the system. A bitter must have name and age.
- A Bidder should be able to bet on an item.

This app uses SQLite as database to persist data.

### 🗃 Business guidelines

- A bet can never be made if it's value is lower than the current item's highest bet value.

### 🧨 Important notice

This code challenge should have provided relational database creation scripts;
I have decided to use knex as a javascript library and providade de migrations and the seed scripts for that.
Nonetheless i have not implemented sql connections to the repositories. So, even though the seed scripts are functional, the data they provide will never affect the resoult shown in the front-end.
I made that choise due to the fact i would not pass the time criteria if i had to implement a full sql query system, also the persistence as an array made the testiung process easier.

## 🏆 Technologies used

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJs](https://expressjs.com/)
- [JestJs](https://jestjs.io/)
- [SQLite](https://www.sqlite.org/)

## 💻 How to run?

###Backend
This project's backedn uses NodeJs with Typescript, so in order for it to work, frist navigate inside the backend's project folder and run npm install to download the proper dependencies:
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

###Frontend
This project's frontend uses React, so in order for it to work, frist navigate inside the frontends's project folder and run npm install to download the proper dependencies:
```
cd iauction-frontend
npm install
or
yarn install
```

After that, we can run the app by running the following command:
```
npm start
or
yarn start
```

PS.: Please notice that backend will run by default at localhost:3333 and frontend at localhost:3000.
If those port are already taken in your system the excecution will fail.

## 🛠 How to test?

###Backend
This project's backend uses JestJs with coverage reports as a test library.
To run unity tests, frist navigate inside backend's project folder and run the following commands:
```
npm test
or
yarn test
```
Those are also just a package.json's script. If for some reason you want to run the full command type the following:
```
jest --coverage --watchAll=false
```

## 💎 About database

This project uses SQLite to provide migrations and populate tables.
There are two scripts to accomplish that:
```
yarn knex:migrate
yarn knex:seed
```
Npm can also bse used, to run the scripts.
```
npm knex:migrate
npm knex:seed
```

It is importante to obsesrvate the order, otherwise the seed process will fail if no tables are created.
The full script commands are the following:
```
npx knex migrate:latest --knexfile knexfile.ts
npx knex seed:run --knexfile knexfile.ts
```

## 📝 Licence

This is under GPL v3 license. See [LICENSE](LICENSE.md) for more details.
