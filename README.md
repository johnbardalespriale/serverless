# Serverless Framework Node HTTP API on AWS

Proyecto que utiliza el framewrok serverless para consumir un API de SWAPI.

## Guía

### Docker

Se debe instalar docker desktop y ejecutar el siguiente comando:

```
$ docker pull amazon/dynamodb-local
```

Debe instalar node.js mediante el siguiente enlace:

[Node.js®](https://nodejs.org/en/download)

Debe instalar AWS Comand Line Interface (CLI) mediante el siguiente enlace:

[AWS (AWS CLI)](https://aws.amazon.com/es/cli/)

Luego debe haber creado una cuenta AWS y en la terminal de comando ejecutar:

```
$ aws configure
```
Le solicitará que configure los siguientes parámetros, cuyos valores los obtendrá del usuario creado en su cuenta AWS.

```bash
✔ Access Key ID:
✔ Secret Access Key:
✔ Region name:
```

Después, al abrir el proyecto para instalar las librerías necesarias debe ejecutar el comando:

```
$ npm install
```

Para ejecutar las prueba unitarias, en el package.json puede ejecutar el script test o el comando:

```
$ jest
```

Una vez ejecutado las pruebas unitarias la cobertura de código puede verse en el index.html en la subcarpeta Icov-report de la carpeta coverage.

**Nota:** Para previsualizar el index.html en el IDE de visual Studio Code puede instalar el plugin: "Live Preview".

Para ejecutar las prueba unitarias, en el package.json puede ejecutar el script test:

```json
"scripts": {
  "test": "jest",
}
```
 o ejecutar en la terminal el comando:
```
$ jest
```

Para ejecutar las prueba unitarias, en el package.json puede ejecutar el script test:

```json
"scripts": {
  "test": "jest",
}
```
 o ejecutar en la terminal el comando:
```
$ jest
```

Para compilar los archivos de typescript a javascript, que se guardarán en la carpeta dist, puede ejecutar el script compile del package.json:

```json
"scripts": {
  "compile": "tsc",
}
```
 o ejecutar en la terminal el comando:
```
$ tsc
```

Para ejecutar el proyecto en local puede ejecutar el script compile del package.json:

```json
"scripts": {
  "local": "npm run compile && serverless offline start",
}
```
 o ejecutar en la terminal el comando:
```
$ npm run compile && serverless offline start
```

Para realizar el deploy del proyecto hacia los servicios de AWS puede ejecutar el script deploy:

```json
"scripts": {
  "deploy": "serverless deploy",
}
```
 o ejecutar en la terminal el comando:
```
$ serverless deploy
```