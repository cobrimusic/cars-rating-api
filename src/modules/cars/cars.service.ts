import Cars from "./cars.model";
import { CrudService } from "../../common/services/crud";

class CarsService extends CrudService {
  public model = Cars;
  public modelName = "Cars";
  public filters = [];
}

export default new CarsService();
