import { Router } from "express";
import { resolve } from "path";
import { existsSync } from "fs";
import { plural } from "pluralize";

import { name, version } from "../package.json";

import { getDirectories } from "./common/utils/functions";

const env = process.env.NODE_ENV || "development";
const prefix = env == "development" ? "" : "build/";

export class IndexRoute {
	public router: Router = Router();
	public exceptModules: string[] = ["auth", "s3"];

	public constructor() {
		this.initRoutes();
	}

	public initRoutes(): void {
		this.initApi();
		this.router.all("/", (req, res): any => res.send(`${name} ${version}`));
	}

	initApi = (): void => {
		const ext = env == "development" ? ".ts" : ".js";
		let modules = getDirectories(resolve(`${prefix}src/modules`));
		modules = modules.filter(module => this.exceptModules.indexOf(module) < 0);
		modules.forEach(async module => {
			const dir = `${prefix}src/modules/${module}/${module}.router${ext}`;
			if (existsSync(resolve(dir))) {
				this.router.use(
					`/api/${plural(module)}`,
					require(`./modules/${module}/${module}.router`).default
				);
			}
		});
	};
}
