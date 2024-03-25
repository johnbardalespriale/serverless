module.exports = {
    // Directorio raíz de las pruebas unitarias
    roots: ["<rootDir>/tests"],
    
    // Patrón de archivos de pruebas que Jest debe buscar
    testMatch: ["**/*.test.ts"],
    
    // Extensiones de archivos reconocidas por Jest
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    
    // Transformación de archivos TypeScript usando ts-jest
    transform: {
      "^.+\\.ts$": "ts-jest"
    },
    
    // Directorio donde se almacenarán los informes de cobertura
    coverageDirectory: "<rootDir>/coverage",
    
    // Habilitar la recopilación de información sobre la cobertura de código
    collectCoverage: true,
    
    // Definir los archivos de código fuente para la recopilación de cobertura
    collectCoverageFrom: ["<rootDir>/src/**/*.ts"]
  };
  