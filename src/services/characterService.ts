import { createCharacterRecord } from '../repositories/characterRepository';
import { Character } from '../models/character';
import { v4 as uuidv4 } from 'uuid';

const validateCharacter = (character: Character) => {
    // Validar que los campos requeridos estén presentes
    if (!character.nombre || !character.altura || !character.peso || !character.color_de_cabello 
            || !character.color_de_piel || !character.color_de_ojos || !character.ano_de_nacimiento 
            || !character.genero || !character.planeta_de_origen || !character.peliculas || !character.especies 
            || !character.vehiculos || !character.naves_espaciales || !character.url) {
        throw new Error('Campos requeridos perdidos');
    }

    return true;
};

export const createCharacter = async (character: Character) => {
    try {
        // Validar los datos del personaje
        validateCharacter(character);

        // Establecer la fecha de creación y edición
        const currentDate = new Date().toISOString();
        const characterId = uuidv4();
        
        character.characterId = characterId;
        character.creado = currentDate;
        character.editado = currentDate;

        // Llamar al repositorio para crear el registro del personaje en DynamoDB
        await createCharacterRecord(character);

        return { message: 'Personaje creado exitosamente' };
    } catch (error: any) {
        // Manejar cualquier error que pueda ocurrir durante el proceso
        throw new Error('Falló en crear el personaje: ' + error?.message);
    }
};
