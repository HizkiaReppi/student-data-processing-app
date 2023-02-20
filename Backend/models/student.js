import { Sequelize } from "sequelize";
import db from "../database/index.js";

const Student = db.define("Student", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  nim: {
    type: Sequelize.INTEGER,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year: {
    type: Sequelize.INTEGER(4),
    allowNull: false,
  },
  major: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  faculty: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  concentration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  semester: {
    type: Sequelize.INTEGER(2),
    allowNull: false,
  },
  supervisior: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  gender: {
    type: Sequelize.ENUM,
    values: ["P", "L"],
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get: function() {
      return this.getDataValue('createdAt').toLocaleString('in-ID');
    }
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get: function() {
      return this.getDataValue('updatedAt').toLocaleString('in-ID');
    }
  },
}, {
  timestamps: false,
  tableName: "students",
});

export default Student;
