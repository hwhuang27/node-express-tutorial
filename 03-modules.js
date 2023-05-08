// CommonJS - Every file is a module by default
// Modules - Encapsulated code, so to only share the minimum

const names = require('./04-names');
const sayHi = require('./05-utils');
const data = require('./06-alternative-flavor');

require('./07-mind-grenade');

sayHi('susan');
sayHi(names.david);
sayHi(names.john);