"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = void 0;
const characterRepository_1 = require("../repositories/characterRepository");
const uuid_1 = require("uuid");
const validateCharacter = (character) => {
    // Validar que los campos requeridos estén presentes
    if (!character.nombre || !character.altura || !character.peso || !character.color_de_cabello
        || !character.color_de_piel || !character.color_de_ojos || !character.ano_de_nacimiento
        || !character.genero || !character.planeta_de_origen || !character.peliculas || !character.especies
        || !character.vehiculos || !character.naves_espaciales || !character.url) {
        throw new Error('Campos requeridos perdidos');
    }
    return true;
};
const createCharacter = async (character) => {
    try {
        // Validar los datos del personaje
        validateCharacter(character);
        // Establecer la fecha de creación y edición
        const currentDate = new Date().toISOString();
        const characterId = (0, uuid_1.v4)();
        character.characterId = characterId;
        character.creado = currentDate;
        character.editado = currentDate;
        // Llamar al repositorio para crear el registro del personaje en DynamoDB
        await (0, characterRepository_1.createCharacterRecord)(character);
        return { message: 'Personaje creado exitosamente' };
    }
    catch (error) {
        // Manejar cualquier error que pueda ocurrir durante el proceso
        throw new Error('Falló en crear el personaje: ' + (error === null || error === void 0 ? void 0 : error.message));
    }
};
exports.createCharacter = createCharacter;
