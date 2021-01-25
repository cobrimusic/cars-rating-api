<h1 align="center">Node cars api | TypeScript</h1>

## 1.  Installing

#### Install dependencies

```bash
$ npm i
```

#### Environments

Copy `.env.example` to `.env` and set environments

## 2. Database
#### Database Config
Setting config database connection on config file:  `config/database.js`

#### Migrations and Seeders
- For implements migrations or seeds install sequelize-cli module:

```bash
$ npm i -g sequelize-cli
```

#### Running Migration

```bash
$ sequelize db:migrate
```

#### Running Seed
```bash
$ sequelize db:seed:all
```

##  3. Running

```bash
$ npm run dev
```
