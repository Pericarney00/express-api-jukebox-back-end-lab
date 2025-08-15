const Track = require("../models/track.js")
const express = require("express")
const router = express.Router()


//CREATE-Post -/tracks res201
router.post("/", async (req, res) => {
  try {
    const createTrack = await Track.create(req.body)
    res.status(201).json(createTrack)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})

//INDEX-Get-/tracks res200
router.get("/", async (req, res) => {
  try {
    const foundTracks = await Track.find()
    res.status(200).json(foundTracks)
  } catch (error) {
    res.status(500).json({error:error.message})
  }
})

//SHOW-GET-/tracks/:id res200
router.get("/:trackId", async (req, res) => {
  try {
    const findTrack = await Track.findById(req.params.trackId)
    if (!findTrack) {
      res.status(400)
      throw new Error("Track not found")
    }

    res.status(200).json(findTrack)
  } catch (error) {
    if (res.statusCode === 400) {
      res.json({error: error.message}) 
    } else {
      res.status(500).json({error: error.message})
    }
  }
})

//UPDATE-PUT-/tracks/:id res200
router.put("/:trackId", async (req, res) => {
  try {
    const updateTrack = await Track.findByIdAndUpdate(req.params.trackId, req.body, { new: true })
    if (!updateTrack) {
      res.status(400)
      throw new Error("Track not found")
    }

    res.status(200).json(updateTrack)
  } catch (error) {
    if (res.statusCode === 400) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
})

//DELETE-DELETE-/tracks/:id res200
router.delete("/:trackId", async (req, res) => {
  try {
    const deletedTrack = await Track.findByIdAndDelete(req.params.trackId);

    if (!deletedTrack) {
      res.status(404);
      throw new Error("Pet not found");
    }

    res.status(200).json(deletedTrack);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router