const characters = require("../resources/characters");

module.exports = {
    getCharacters: function() {
        return characters;
    },
    getCharacterBySlug: function(slug) {
        return characters.filter(character => character.slug === slug);
    }
}
