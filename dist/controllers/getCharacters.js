"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const getCharactersService_1 = require("../services/getCharactersService");
const handler = async (event) => {
    var _a;
    try {
        // Obtener el nombre de búsqueda del evento o proporcionar un valor predeterminado si no se proporciona
        const searchQuery = ((_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.name) || '';
        // Llamar a la función de servicio con el nombre de búsqueda
        const characters = await (0, getCharactersService_1.getCharactersService)(searchQuery);
        return {
            statusCode: 200,
            body: JSON.stringify(characters)
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error === null || error === void 0 ? void 0 : error.message })
        };
    }
};
exports.handler = handler;
