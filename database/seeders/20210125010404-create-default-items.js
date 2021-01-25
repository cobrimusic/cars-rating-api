'use strict';
const now = new Date();

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		*/

		return await queryInterface.bulkInsert('items', [
			{
				description: 'Change of suspension',
				make: 'Nissan',
				model: 'Versa',
				image: 'https://cars.usnews.com/static/images/Auto/izmo/i135843541/2019_nissan_versa_sedan_angularfront.jpg',
				main: 1,
				estimatedate: now,
				created_at: now,
				updated_at: now
			},
			{
				description: "Motor adjustment",
				make: "Honda",
				model: "CR-V",
				image: 'https://www.honda.mx/assets/img/autos/honda/modelos/crv2021/colores/blanco.png',
				main: 0,
				estimatedate: now,
				created_at: now,
				updated_at: now
			}
		], {})
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return await queryInterface.bulkDelete("items", null, {})
	}
};
