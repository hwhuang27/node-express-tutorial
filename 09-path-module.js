const path = require('path');

// platform-specific seperator 
console.log(path.sep);  // returns '\' for windows, '/' for other OS

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// useful when you have different environments
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);