"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class ProfessorScheduleViewModel extends sequelize_1.Model {
}
ProfessorScheduleViewModel.init({
    professorId: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        field: 'professor_id'
    },
    professorName: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
        field: 'professor_name'
    },
    dayOfWeek: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
        field: 'day_of_week'
    },
    shift: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    roomName: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    floor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'vw_professors_schedule',
    sequelize: database_1.default,
    timestamps: false,
    underscored: true,
});
exports.default = ProfessorScheduleViewModel;
