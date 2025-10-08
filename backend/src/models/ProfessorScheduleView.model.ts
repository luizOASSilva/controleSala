import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class ProfessorScheduleViewModel extends Model{
    declare professorId: number;
    declare professorName: string;
    declare dayOfWeek: number;
    declare shift: string;
    declare roomName: string;
    declare floor: number;
}

ProfessorScheduleViewModel.init(
    {
        professorId: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'professor_id'
        },
        professorName: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'professor_name'
        },
        dayOfWeek: {
            type: DataTypes.STRING(45),
            allowNull: true,
            field: 'day_of_week'
        },
        shift: {
            type: DataTypes.STRING(45),
            allowNull: true,
        }, 
        roomName: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        floor: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: true,
            field: 'start_time',
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: true,
            field: 'end_time',
        },
    },
    {
        tableName: 'vw_professors_schedule',
        sequelize,
        timestamps: false,
        underscored: true,
    }
)

export default ProfessorScheduleViewModel;
