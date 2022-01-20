## Iniciar proyecto
```bash
# inicializar proyecto
npm init -y
# instalar con npm
npm install next react react-dom
```
Se crea el folder de pages y los scripts
```js
    "dev": "next",
    "build": "next build",
    "start": "next start"
```
Para hacer deploy como pagina estatica se agrega el script
```js
    "export": "next export"
```
Corremos en bash:
```bash
npm run build
npm run export
# iniciar servidor estatico
npx serve ./out/
```