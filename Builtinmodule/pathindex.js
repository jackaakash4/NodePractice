const path = require("node:path");

console.log(__dirname);
console.log(__filename);

//basename
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

//extension
console.log(path.extname(__dirname));
console.log(path.extname(__filename));

//all information
console.log(path.parse(__dirname));
console.log(path.parse(__filename));

//format
console.log(path.format(path.parse(__filename)));


//absolute or not
console.log(path.isAbsolute(__filename));