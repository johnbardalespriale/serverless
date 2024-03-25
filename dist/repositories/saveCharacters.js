"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchInDynamoDB = void 0;
const aws_sdk_1 = require("aws-sdk");
const dynamoDB = new aws_sdk_1.DynamoDB.DocumentClient();
const tableName = 'StarWarsCharacters';
const globalSecondaryIndexName = 'NameIndex';
const searchInDynamoDB = async (searchQuery) => {
    const attributeName = 'nombre', attributeValue = searchQuery;
    const params = {
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
            return data.Items;
        }
        else {
            return null;
        }
    }
    catch (error) {
        throw new Error('Error al buscar en DynamoDB');
    }
};
exports.searchInDynamoDB = searchInDynamoDB;
