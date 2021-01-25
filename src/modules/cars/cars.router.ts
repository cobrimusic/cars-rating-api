import { CrudRoute } from "../../common/classes/crud-route";
import controller from "./cars.controller";
import { Router } from "express";

export class CarsRoute extends CrudRoute {
	public router: Router = Router();
	public controller = controller;

	public constructor() {
		super();
		this.init();
	}
}

export default new CarsRoute().router;
