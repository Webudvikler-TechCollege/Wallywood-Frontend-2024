import Album from "../Models/album.model.js";
import AlbumSongRel from "../Models/album_song_rel.model.js";
import Song from "../Models/song.model.js";
import Artist from "../Models/artist.model.js";

// Relations 
Song.belongsTo(Artist, { foreignKey: 'id' });
Song.belongsToMany(Album, { through: AlbumSongRel });
Album.belongsToMany(Song, { through: AlbumSongRel });

export default class SongController {

	/**
	 * List Metode
	 * @param {*} req 
	 * @param {*} res 
	 */
	list = async (req, res) => {
		const result = await Song.findAll({
			include: {
				model: Artist,
				attributes: ['id', 'name']
			}
		});
        res.status(200).send(result);
	}

	/**
	 * Create Method
	 * @param {*} req 
	 * @param {*} res 
	 */
	create = async (req, res) => {
		const { title, content, is_active } = req.body;

		if(title && content && is_active) {
			const result = await Song.create(req.body);
			res.status(200).send({
				message: 'Record created',
				new_id: result.id
			})
		} else {
			res.status(403).send({
				message: 'Wrong parameter values'
			})
		}
	}


}