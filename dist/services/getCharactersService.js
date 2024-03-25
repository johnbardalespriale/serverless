"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharactersService = void 0;
const axios_1 = __importDefault(require("axios"));
const saveCharacters_1 = require("../repositories/saveCharacters");
const getCharactersService = async (searchQuery) => {
    let characters = null;
    // Buscar en DynamoDB primero
    characters = await (0, saveCharacters_1.searchInDynamoDB)(searchQuery);
    if (characters == null) {
        // Si no se encuentran en DynamoDB, llamar a la API de SWAPI
        const url = `https://swapi.dev/api/people/?format=json&search=${searchQuery}`;
        const response = await axios_1.default.get(url);
        characters = response.data.results.map((characterData, index) => {
            return {
                characterId: `${index + 1}`, // Generando un characterId único
                nombre: characterData.name,
                altura: parseInt(characterData.height) || 0,
                peso: parseInt(characterData.mass) || 0,
                color_de_cabello: characterData.hair_color || '',
                color_de_piel: characterData.skin_color || '',
                color_de_ojos: characterData.eye_color || '',
                ano_de_nacimiento: characterData.birth_year || '',
                genero: characterData.gender || '',
                planeta_de_origen: characterData.homeworld || '',
                peliculas: characterData.films || [],
                especies: characterData.species || [],
                vehiculos: characterData.vehicles || [],
                naves_espaciales: characterData.starships || [],
                creado: characterData.created || '',
                editado: characterData.edited || '',
                url: characterData.url || ''
            };
        });
    }
    if (characters == null || characters.length === 0) {
        throw new Error(`El personaje "${searchQuery}" no existe.`);
    }
    return characters;
};
exports.getCharactersService = getCharactersService;
