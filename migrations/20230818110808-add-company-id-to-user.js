"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn("users", "company_id", {
            type: Sequelize.INTEGER,
            references: {
                model: "companies", // 참조할 모델의 이름
                key: "id", // 참조할 컬럼의 이름
            },
            onUpdate: "CASCADE", // 부모 레코드가 업데이트되면 자식 레코드도 업데이트됨
            onDelete: "SET NULL", // 부모 레코드가 삭제되면 자식 레코드의 컬럼 값은 NULL이 됨
        });

        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn("Users", "CompanyId");
    },
};
