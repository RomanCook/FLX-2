let inputs = process.argv.slice(2);
let result = inputs.map((el)=> el.slice(0,1)).reduce((pre,cur)=> pre+cur);
console.log(result);