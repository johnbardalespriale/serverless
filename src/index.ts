import serverless from 'serverless-http';
import express from 'express';
import { handler as getCharactersHandler } from './controllers/getCharacters';
import { createCharacterHandler as createCharacterHandler } from './controllers/characterController';

// Crear una instancia de Express
const app = express();

// Definir las rutas
app.get('/characters', getCharactersHandler);
app.post('/createCharacter', createCharacterHandler);

// Exportar la aplicación para su uso con Serverless Framework
export const handler = serverless(app);
