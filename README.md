# Funcionamento do projeto
> Projeto desenvolvido em Node.js (back-end) e React (front-end), para consumo de uma API.

## Back-end
1. Abra o Visual Studio Code e selecione a pasta back
2. Utilize o comando: npm i json-server@0.17.4 para criar uma API falsa
3. Execute o projeto: json-server dados.json, caso não funcione o comando, utilize: json-server --watch db.json
4. Sua aplicação estará funcionando em: http://localhost:3000/dados

> OBS: O json-server é uma dependência para criar APIs falsas em Node, por padrão podemos executar requisições básicas, como: GET, POST, PUT e DELETE.

## Front-end
1. Abra um novo Visual Studio Code (o back-end precisa estar em funcionamento)
2. Via terminal, utilize o comando: npm i, fazendo com que todas as dependências do Node sejam instaladas
3. Execute o projeto: npm start (Por padrão a aplicação funciona na porta 3000, mas o back-end por padrão é essa porta, então o terminal irá sugerir executar em uma nova porta, informe YES ou SIM para continuar)