import { APIGatewayProxyEvent } from 'aws-lambda';
import { handler } from '../../src/controllers/getCharacters';
import { getCharactersService } from '../../src/services/getCharactersService';

jest.mock('../../src/services/getCharactersService');

describe('Character Controller', () => {
  test('should return 200 with characters', async () => {
    const characters = [{ nombre: 'Luke Skywalker' }];
    const event: APIGatewayProxyEvent = { queryStringParameters: { name: 'Luke' } } as any;
    (getCharactersService as jest.Mock).mockResolvedValue(characters);

    const result = await handler(event);

    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify(characters));
  });

  test('should return 500 with error message', async () => {
    const errorMessage = 'Internal Server Error';
    const event: APIGatewayProxyEvent = { queryStringParameters: {} } as any;
    (getCharactersService as jest.Mock).mockRejectedValue(new Error(errorMessage));

    const result = await handler(event);

    expect(result.statusCode).toBe(500);
    expect(result.body).toBe(JSON.stringify({ message: errorMessage }));
  });
});
