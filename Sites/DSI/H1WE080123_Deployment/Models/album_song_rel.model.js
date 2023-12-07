import sequelize from "../Config/sequelize.config.js";
import { Model, DataTypes } from "sequelize";

class AlbumSongRel extends Model {}

AlbumSongRel.init({
	id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    album_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    song_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // Definér relation
},{
	sequelize,
    tableName: 'album_song_rel',
    underscored: true,
    freezeTableName: true,
    timestamps: false
})

AlbumSongRel.associate = (models) => {
    // Define associations
    AlbumSongRel.belongsTo(models.Song, { foreignKey: "song_id" });
    AlbumSongRel.belongsTo(models.Album, { foreignKey: "album_id" });
};

export default AlbumSongRel