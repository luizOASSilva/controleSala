"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class AulaView extends sequelize_1.Model {
}
AulaView.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    curso: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    semestre: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    disciplina: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    professor: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    local: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: true,
    },
    andar: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    diaSemana: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
        field: 'dia_semana',
    },
    turno: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    horasIni: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
        field: 'horas_ini',
    },
    horasFim: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
        field: 'horas_fim',
    },
    ano: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    tableName: 'vw_aula',
    sequelize: database_1.default,
    timestamps: false,
    underscored: true,
});
exports.default = AulaView;
