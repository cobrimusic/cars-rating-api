require("dotenv").config();

const {
	DB_HOST,
	DB_NAME,
	DB_DRIVER,
	DB_USER,
	DB_PASSWORD,
	NODE_ENV
} = process.env;

const env = NODE_ENV || "development";

const defaultConfig = {
	host: DB_HOST,
	database: DB_NAME,
	username: DB_USER,
	password: DB_PASSWORD,
	dialect: DB_DRIVER, 
	dialectOptions: {
		dateStrings: true,
		typeCast: (field, next) => {
			if (field.type === "DATETIME") return field.string();
			return next();
		}
	},
	timezone: "-03:00"
};

const storageConfig = {
	migrationStorage: "json",
	migrationStoragePath: "./database/migration-metadata.json",
	seederStorage: "json",
	seederStoragePath: "./database/seeder-metadata.json"
};

module.exports = {
	[env]: { ...defaultConfig, ...storageConfig }
};