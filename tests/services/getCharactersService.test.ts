import axios from 'axios';
import { getCharactersService } from '../../src/services/getCharactersService';
import { searchInDynamoDB } from '../../src/repositories/saveCharacters';

jest.mock('../../src/repositories/saveCharacters');
jest.mock('axios');

describe('Character Service', () => {
  test('should get characters from SWAPI if not available in DynamoDB', async () => {
    const characters = [{ name: 'Luke Skywalker' }];
    (searchInDynamoDB as jest.Mock).mockResolvedValue(null);
    (axios.get as jest.Mock).mockResolvedValue({ data: { results: characters } });

    const result = await getCharactersService('Luke');

    expect(result).toEqual([{
      characterId: '1',
      nombre: 'Luke Skywalker',
      altura: 0,
      peso: 0,
      color_de_cabello: '',
      color_de_piel: '',
      color_de_ojos: '',
      ano_de_nacimiento: '',
      genero: '',
      planeta_de_origen: '',
      peliculas: [],
      especies: [],
      vehiculos: [],
      naves_espaciales: [],
      creado: '',
      editado: '',
      url: ''
    }]);
  });
});
