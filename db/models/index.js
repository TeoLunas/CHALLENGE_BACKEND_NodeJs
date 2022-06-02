const { Character, CharacterSchema } = require('./characterModel');

function setupModels(sequelize){
    Character.init(CharacterSchema, Character.config(sequelize));
}

module.exports = setupModels;