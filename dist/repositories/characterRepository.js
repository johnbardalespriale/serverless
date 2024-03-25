"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacterRecord = void 0;
const dynamodb_1 = require("aws-sdk/clients/dynamodb");
const dynamoDB = new dynamodb_1.DocumentClient();
const createCharacterRecord = async (character) => {
    const params = {
        TableName: 'StarWarsCharacters',
        Item: {
            characterId: character.characterId,
            nombre: character.nombre,
            altura: character.altura,
            peso: character.peso,
            color_de_cabello: character.color_de_cabello,
            color_de_piel: character.color_de_piel,
            color_de_ojos: character.color_de_ojos,
            ano_de_nacimiento: character.ano_de_nacimiento,
            genero: character.genero,
            planeta_de_origen: character.planeta_de_origen,
            peliculas: character.peliculas,
            especies: character.especies,
            vehiculos: character.vehiculos,
            naves_espaciales: character.naves_espaciales,
            creado: character.creado,
            editado: character.editado,
            url: character.url
        }
    };
    return dynamoDB.put(params).promise();
};
exports.createCharacterRecord = createCharacterRecord;
