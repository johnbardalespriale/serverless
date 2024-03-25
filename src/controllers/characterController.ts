import { createCharacter } from '../services/characterService';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const createCharacterHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        let character;
        if (event.body) {
            character = JSON.parse(event.body);
        } else {
            throw new Error('Request body es vacío');
        }
        const result = await createCharacter(character);
        return {
            statusCode: 201,
            body: JSON.stringify(result),
        };
    } catch (error: any) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error?.message }),
        };
    }
};
