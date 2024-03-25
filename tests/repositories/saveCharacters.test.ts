import { DynamoDB } from 'aws-sdk';
import { searchInDynamoDB } from '../../src/repositories/saveCharacters';

jest.mock('aws-sdk');

describe('Character Repository', () => {
  test('should search characters in DynamoDB', async () => {
    const characters = [{ nombre: 'Luke Skywalker' }];
    (DynamoDB.DocumentClient.prototype.query as jest.Mock).mockReturnValue({
      promise: jest.fn().mockResolvedValue({ Items: characters })
    });

    const result = await searchInDynamoDB('Luke');

    expect(result).toEqual(characters);
  });
});
