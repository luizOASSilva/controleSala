"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class LessonViewModel extends sequelize_1.Model {
}
LessonViewModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    course: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    semester: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    subject: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    professor: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    location: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    floor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    dayOfWeek: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        field: 'day_of_week',
    },
    shift: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    startTime: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
        field: 'start_time',
    },
    endTime: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
        field: 'end_time',
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'vw_lessons',
    sequelize: database_1.default,
    timestamps: false,
    underscored: true,
});
exports.default = LessonViewModel;
