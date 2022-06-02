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

router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const searchCharacterById = await service.findOne(id);
    res.json(searchCharacterById);
})

router.post('/', async(req, res) => {
    const body = req.body;
    const newCharacter = await service.create(body);
    res.status(201).json(newCharacter);
});

router.patch('/:id', async(req, res) => {
    const { id } = req.params;
    const body = req.body;
    const characterUpdate = service.update(id, body);
    res.json(characterUpdate)
});

router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    const characterDelete = await service.delete(id);
    res.json(id)
});

module.exports = router;