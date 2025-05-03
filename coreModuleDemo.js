import { basename, dirname, extname } from 'path';

const filepath = 'A:/Node.js/nodejs-journey/app.js';

console.log('Base: ', basename(filepath)); //app.js
console.log('Dir: ', dirname(filepath)); // A:/Node.js/nodejs-journey
console.log('Ext; ', extname(filepath)); //.js