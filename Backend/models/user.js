import { Sequelize } from "sequelize";
import db from "../database/index.js";

const User = db.define("User", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get: function () {
      return this.getDataValue("createdAt").toLocaleString("in-ID");
    },
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get: function () {
      return this.getDataValue("updateAt").toLocaleString("in-ID");
    },
  },
}, {
  timestamps: false,
  tableName: "users",
});

export default User;