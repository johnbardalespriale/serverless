import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Character } from '../models/character';

const dynamoDB = new DocumentClient();

export const createCharacterRecord = async (character: Character) => {
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
