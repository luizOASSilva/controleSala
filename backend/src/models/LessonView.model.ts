import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class LessonViewModel extends Model {
    declare course: string;
    declare semester: string;
    declare subject: string;
    declare professor: string;
    declare location: string;
    declare floor: number;
    declare dayOfWeek: number;
    declare shift: string;
    declare startTime: Date;
    declare endTime: Date;
    declare year: number;
}

LessonViewModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        course: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        semester: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        subject: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        professor: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        floor: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dayOfWeek: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'day_of_week',
        },
        shift: {
            type: DataTypes.STRING,
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
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        tableName: 'vw_lessons', 
        sequelize,
        timestamps: false, 
        underscored: true,
    }
);

export default LessonViewModel;
