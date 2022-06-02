const { models } = require('../libs/sequelize');

class CharacterService {
    constructor(){
        
    }

    async create(data){
        const newCharacter = await models.Character.create(data);
        return newCharacter;
    }

    async find(){
        const options = { attributes: ['name', 'image'] }
        const rta = await models.Character.findAll(options);
        return rta;
    }

    async findOne(id){
        const rta = await models.Character.findByPk(id);
        if(!rta){
            return 'Personaje No existe';
        }
        return rta;
    }

    async update(id, changes){
        const charater = await this.findOne(id);
        const rta = await charater.update(changes);
        return rta;
    }

    async delete(id){
        const character = await this.findOne(id);
        await character.destroy();
        return {id};
    }
}

module.exports = CharacterService;