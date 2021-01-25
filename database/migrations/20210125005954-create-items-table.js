'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */

		return await queryInterface.createTable('items', {
			id: {
				type: Sequelize.INTEGER.UNSIGNED,
				autoIncrement: true,
				primaryKey: true
			},
			description: {
				type: Sequelize.STRING,
				allowNull: true
			},
			make: {
				type: Sequelize.STRING,
				allowNull: true
			},
			model: {
				type: Sequelize.STRING,
				allowNull: true
			},
			image: {
				type: Sequelize.STRING,
				allowNull: true
			},
			main: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			estimatedate: Sequelize.DATE,
			created_at: Sequelize.DATE,
      		updated_at: Sequelize.DATE,
		})
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */

		return await queryInterface.dropTable('items');
	}
};
