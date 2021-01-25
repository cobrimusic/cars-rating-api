import { Sequelize } from "sequelize";

import express = require("express");
import cors = require("cors");
import logger = require("morgan");

import Database from "./database";
import { IndexRoute } from "./routes";

class App {
	public express: express.Application;
	public sequelize: Sequelize;

	public constructor() {
		this.express = express();
		this.database();
		this.middlewares();
		this.routes();
	}

	private database(): void {
		this.sequelize = new Database().sequelize;
	}

	private middlewares(): void {
		this.express.use(logger("dev"));
		this.express.use(express.json());
		this.express.use(cors());
	}

	private routes(): void {
		this.express.use("/", new IndexRoute().router);
	}
}
export default new App().express;
