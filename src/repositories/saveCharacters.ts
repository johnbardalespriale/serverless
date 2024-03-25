import { DynamoDB } from 'aws-sdk';
import { Character } from '../models/character';

const dynamoDB = new DynamoDB.DocumentClient();
const tableName = 'StarWarsCharacters';
const globalSecondaryIndexName = 'NameIndex';

export const searchInDynamoDB = async (searchQuery: string): Promise<Character[] | null> => {
  const attributeName: string = 'nombre', attributeValue: string = searchQuery;
  const params: DynamoDB.DocumentClient.QueryInput = {
    TableName: tableName,
    IndexName: globalSecondaryIndexName,
    KeyConditionExpression: `#${attributeName} = :${attributeName}`,
    //FilterExpression: `#${attributeName} = :${attributeName}`,
    ExpressionAttributeNames: {
      [`#${attributeName}`]: attributeName
    },
    ExpressionAttributeValues: {
      [`:${attributeName}`]: attributeValue
    },
  };

  try {
    const data = await dynamoDB.query(params).promise();

    if (data.Items && data.Items.length > 0) {

      return data.Items as Character[];

    } else {

      return null;

    }
  } catch (error) {
    throw new Error('Error al buscar en DynamoDB');
  }

};