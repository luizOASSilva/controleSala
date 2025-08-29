import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Curso extends Model {
    declare id: number;
    declare nome: string;
}

Curso.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(45),
            allowNull: true,
        }
    },
    {
        tableName: 'cursos',
        sequelize,
        timestamps: false,
    },

)

export default Curso;