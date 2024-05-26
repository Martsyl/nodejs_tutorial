const path = require('path');

// console.log(path.sep);
const filepPath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filepPath);
const baseName = path.basename(filepPath)
// console.log(baseName);
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);