import { Sequelize } from "sequelize";

const db = new Sequelize("crud_test2", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
