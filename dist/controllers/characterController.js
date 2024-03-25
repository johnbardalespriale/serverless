"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacterHandler = void 0;
const characterService_1 = require("../services/characterService");
const createCharacterHandler = async (event) => {
    try {
        let character;
        if (event.body) {
            character = JSON.parse(event.body);
        }
        else {
            throw new Error('Request body es vacío');
        }
        const result = await (0, characterService_1.createCharacter)(character);
        return {
            statusCode: 201,
            body: JSON.stringify(result),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error === null || error === void 0 ? void 0 : error.message }),
        };
    }
};
exports.createCharacterHandler = createCharacterHandler;
