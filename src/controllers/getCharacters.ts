import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getCharactersService } from '../services/getCharactersService';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // Obtener el nombre de búsqueda del evento o proporcionar un valor predeterminado si no se proporciona
    const searchQuery = event.queryStringParameters?.name || '';
    
    // Llamar a la función de servicio con el nombre de búsqueda
    const characters = await getCharactersService(searchQuery);
  
    return {
      statusCode: 200,
      body: JSON.stringify(characters)
    };
  } catch (error: any) {     
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error?.message })
    };
  }
};
