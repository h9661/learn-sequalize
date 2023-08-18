const Sequelize = require("sequelize");

class Company extends Sequelize.Model {
    static initiate(sequelize) {
        Company.init(
            {
                name: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                    unique: true,
                },
                created_at: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.NOW,
                },
            },
            {
                sequelize,
                timestamps: false,
                underscored: false,
                modelName: "Company",
                tableName: "companies",
                paranoid: false,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(db) {
        db.Company.hasMany(db.User, {
            foreignKey: "company_id",
            sourceKey: "id",
        });
    }
}

module.exports = Company;
