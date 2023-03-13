# api-express-ts

Some links to learn more about this project
[Aprendiendo NodeJs y Express para crear una API](https://www.youtube.com/watch?v=o85OkeVtm7k&ab_channel=midudev)
[Tu primer aplicación de Nodejs desde Cero (más Despliegue)](https://www.youtube.com/watch?app=desktop&v=OVESuyVoPkI&ab_channel=Fazt)
[Api con NODE y despliegue con AWS EC2 !](https://www.youtube.com/watch?v=nSA3SVC0gqc&ab_channel=GentlemanProgramming)
[How to Build a Node.js Application with Express and Pug](https://betterstack.com/community/guides/scaling-nodejs/build-nodejs-application-express-pug/)


## first steps

- mkdir api-express-ts
- cd api-express-ts
- npm init --y (esto genera el package.json)
- npm install typescript -D (instala typescript como dependencia de desarrollo)
- code .
- npm i express @types/express -S (instala express y sus tipos)
- npm i cors @types/cors -S (instala cors y sus tipos)
- npm i dotenv -S (instala dotenv para manejar variables de entorno)
- npm i ts-node-dev -D (instala ts-node-dev para ejecutar el proyecto en modo desarrollo)
- npm i ts-standard -D (instala ts-standard para formatear el código)
- npm i pug -S (instala pug para manejar plantillas)
- npm i @types/pug -D (instala los tipos de pug) 

---

## init project

- npm run tsc -- --init
- > edit if needed the tsconfig.json file for different options
- npm run tsc // add script "tsc" un package.json

---

---

### lib

- > [express](https://expressjs.com/)
- > [@types/express](https://www.npmjs.com/package/@types/express)
- > [dotenv](https://www.npmjs.com/package/dotenv)
- > [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)
- > [ts-standard](https://www.npmjs.com/package/ts-standard)
- > [express template-engines](https://expressjs.com/en/guide/using-template-engines.html)
- > [pug](https://pugjs.org/api/getting-started.html)

---

### Tech & languages and more...

- > [yarn](https://yarnpkg.com/)

```
- yarn add <lib> -E
- yarn remove <lib>
- yarn run <script>
```

### To run App

```
- yarn dev // run app in dev mode
- yarn start // run app in production mode 
```
