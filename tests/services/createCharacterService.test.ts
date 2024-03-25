import { createCharacter } from '../../src/services/characterService';
import { createCharacterRecord } from '../../src/repositories/characterRepository';
import { Character } from '../../src/models/character';

jest.mock('../../src/repositories/characterRepository');

describe('Character Service', () => {
  test('should create character successfully', async () => {
    const mockCharacter: Character = {
      characterId: '1', 
      nombre: 'Luke Skywalker', 
      altura: 172, 
      peso: 77, 
      color_de_cabello: 'blond', 
      color_de_piel: 'fair', 
      color_de_ojos: 'blue', 
      ano_de_nacimiento: '19BBY', 
      genero: 'male', 
      planeta_de_origen: 'Tatooine', 
      peliculas: ['A New Hope'], 
      especies: ['Human'], 
      vehiculos: ['https://swapi.dev/api/vehicles/14/'], 
      naves_espaciales: ['https://swapi.dev/api/starships/12/'], 
      creado: '2024-03-26T12:00:00Z', 
      editado: '2024-03-26T12:00:00Z', 
      url: 'https://example.com/luke-skywalker'
    };
    const mockResponse = { message: 'Personaje creado exitosamente' };

    (createCharacterRecord as jest.Mock).mockResolvedValue({});

    const result = await createCharacter(mockCharacter);

    expect(createCharacterRecord).toHaveBeenCalledWith(mockCharacter);
    expect(result).toEqual(mockResponse);
  });

  test('should throw error if character validation fails', async () => {
    const mockCharacter: Character = {
      characterId: '1', // Aquí puedes usar cualquier valor para el id del personaje
      nombre: 'Luke Skywalker', // Nombre del personaje
      altura: 172, // Altura del personaje
      peso: 77, // Peso del personaje
      color_de_cabello: '', // Color de cabello del personaje
      color_de_piel: '', // Color de piel del personaje
      color_de_ojos: '', // Color de ojos del personaje
      ano_de_nacimiento: '', // Año de nacimiento del personaje
      genero: '', // Género del personaje
      planeta_de_origen: '', // Planeta de origen del personaje
      peliculas: [], // Películas en las que aparece el personaje
      especies: [], // Especies a las que pertenece el personaje
      vehiculos: [], // Vehículos utilizados por el personaje
      naves_espaciales: [], // Naves espaciales utilizadas por el personaje
      creado: '', // Fecha de creación del registro del personaje
      editado: '', // Fecha de edición del registro del personaje
      url: '' // URL del personaje
    };
  
    // No es necesario simular createCharacterRecord, ya que la validación ocurre antes de llamar a esa función
  
    await expect(createCharacter(mockCharacter)).rejects.toThrowError('Falló en crear el personaje');
  });
});
