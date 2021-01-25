import UserService from "./cars.service";
import CrudController from "../../common/controllers/crud";

export class CarsController extends CrudController {
	public service = UserService;
}

export default new CarsController();
