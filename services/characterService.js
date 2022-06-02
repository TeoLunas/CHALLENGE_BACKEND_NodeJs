const { models } = require('../libs/sequelize');

class CharacterService {
    constructor(){
        
    }

    async create(data){
        const newCharacter = await models.Character.create(data);
        return newCharacter;
    }

    async find(){
        const rta = await models.Character.findAll();
        return rta;
    }
}

module.exports = CharacterService;