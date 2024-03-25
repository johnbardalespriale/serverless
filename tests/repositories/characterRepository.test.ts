import { createCharacterRecord } from '../../src/repositories/characterRepository';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Character } from '../../src/models/character';

jest.mock('aws-sdk/clients/dynamodb');

describe('Character Repository', () => {
  test('should create character record in DynamoDB', async () => {
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
      peliculas: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
      especies: ['Human'],
      vehiculos: [],
      naves_espaciales: [],
      creado: '',
      editado: '',
      url: ''
    };

    const mockPutPromise = jest.fn().mockResolvedValue({});
    (DocumentClient.prototype.put as jest.Mock).mockReturnValue({ promise: mockPutPromise });

    await createCharacterRecord(mockCharacter);

    expect(DocumentClient.prototype.put).toHaveBeenCalledWith(expect.any(Object));
    expect(mockPutPromise).toHaveBeenCalled();
  });
});
