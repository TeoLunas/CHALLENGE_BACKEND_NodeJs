const express = require('express')
const CharacterService = require('./../services/characterService');

const router = express.Router();
const service = new CharacterService();

router.get('/', async (req, res) => {
    try {
        const characters = await service.find();
        res.json(characters)
    } catch (error) {
        
    }
});

router.post('/', async(req, res) => {
    const body = req.body;
    const newCharacter = await service.create(body);
    res.status(201).json(newCharacter);
});

module.exports = router;