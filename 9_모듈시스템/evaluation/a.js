import { sayHello } from './b.js';
import { sayHello2 } from './c.js';

console.log('a.js');
sayHello();
sayHello2();

export default () => {};
