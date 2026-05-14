import * as fs from 'fs';

const data = fs.readFileSync('le_petit_prince.txt', 'utf8');

export default data;