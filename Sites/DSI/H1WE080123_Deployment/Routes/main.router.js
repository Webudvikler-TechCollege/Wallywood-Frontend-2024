import express from "express";
import sequelize from "../Config/sequelize.config.js";
import SongController from "../Controllers/song.controller.js";
const router = express.Router()
const controller = new SongController()

import Song from "../Models/song.model.js";
import Artist from "../Models/artist.model.js";
import Album from "../Models/album.model.js";
import AlbumSongRel from "../Models/album_song_rel.model.js";

router.get('/', (req, res) => { res.send('Welcome') })


router.get('/songs', (req, res) => { controller.list(req,res) })
router.post('/songs', (req, res) => { controller.create(req,res) })

router.get("/install", async (req, res) => {
	try {
		await sequelize.sync()
		res.sendStatus(200)
	} catch (error) {
		res.send(error)
	}
})

export default router