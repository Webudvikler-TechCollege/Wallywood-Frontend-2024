import sequelize from "../Config/sequelize.config.js";
import { Model, DataTypes } from "sequelize";

class Artist extends Model { }

Artist.init({
	id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
	sequelize,
	modelName: 'artist',
    underscored: true,
})

export default Artist