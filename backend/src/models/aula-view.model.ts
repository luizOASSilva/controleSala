import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class AulaView extends Model {
    declare curso: string;
    declare semestre: string;
    declare disciplina: string;
    declare professor: string;
    declare local: string;
    declare andar: number;
    declare diaSemana: string;
    declare turno: string;
    declare horasIni: Date;
    declare horasFim: Date;
    declare ano: number;
}

AulaView.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        curso: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        semestre: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        disciplina: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        professor: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        local: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        andar: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        diaSemana: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'dia_semana',
        },
        turno: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        horasIni: {
            type: DataTypes.TIME,
            allowNull: true,
            field: 'horas_ini',
        },
        horasFim: {
            type: DataTypes.TIME,
            allowNull: true,
            field: 'horas_fim',
        },
        ano: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        tableName: 'vw_aula', 
        sequelize,
        timestamps: false, 
        underscored: true,
    }
);

export default AulaView;
