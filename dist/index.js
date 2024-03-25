"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const serverless_http_1 = __importDefault(require("serverless-http"));
const express_1 = __importDefault(require("express"));
const getCharacters_1 = require("./controllers/getCharacters");
const characterController_1 = require("./controllers/characterController");
// Crear una instancia de Express
const app = (0, express_1.default)();
// Definir las rutas
app.get('/characters', getCharacters_1.handler);
app.post('/createCharacter', characterController_1.createCharacterHandler);
// Exportar la aplicación para su uso con Serverless Framework
exports.handler = (0, serverless_http_1.default)(app);
