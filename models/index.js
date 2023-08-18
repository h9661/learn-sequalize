const Sequelize = require("sequelize");
const User = require("./user");
const Comment = require("./comment");
const Company = require("./company");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;

db.Company = Company;
db.User = User;
db.Comment = Comment;

User.initiate(sequelize);
Comment.initiate(sequelize);
Company.initiate(sequelize);

Company.associate(db);
User.associate(db);
Comment.associate(db);

module.exports = db;
