import { TimestampsModel } from "../../common/classes/timestamps-model";
import { timestamps } from "../../common/constants/timestamps";
import { defaultScope, scopes } from "./cars.scopes";
import { DataTypes } from "sequelize";

export default class Cars extends TimestampsModel {
	public id!: number;
	public description!: string;
	public make!: string;
	public model!: string;
	public image!: string;
	// public reset_password_expires!: Date;
}

export const attributes = {
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrement: true,
		primaryKey: true
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true
	},
	make: {
		type: DataTypes.STRING,
		allowNull: true
	},
	model: {
		type: DataTypes.STRING,
		allowNull: true
	},
	image: {
		type: DataTypes.STRING,
		allowNull: true
	},
	main: {
		type: DataTypes.INTEGER,
		allowNull: true
	}
};

export const init = (sequelize): void => {
	Cars.init(attributes, {
		sequelize,
		tableName: "items",
		defaultScope,
		scopes,
		...timestamps,
	});
};
