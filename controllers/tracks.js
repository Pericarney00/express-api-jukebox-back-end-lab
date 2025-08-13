const Track = require("../models/track.js")
const express = require("express")
const router = express.Router()


//CREATE-Post -/tracks res201
router.post("/", async (req, res) => {
  try {
    const createTrack = await Track.create(req.body)
    res.status(201).json({createTrack})
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})

//INDEX-Get-/tracks res200


//SHOW-GET-/tracks/:id res200


//UPDATE-PUT-/tracks/:id res200


//DELETE-DELETE-/tracks/:id res200


module.exports = router