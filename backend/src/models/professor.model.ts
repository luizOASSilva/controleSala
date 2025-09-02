import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Professor extends Model {
    declare id: number;
    declare nome: string;
    declare status: string;
}

Professor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    },
    {
    tableName: 'professores',
    sequelize,
    timestamps: false,
    }  
)

export default Professor;