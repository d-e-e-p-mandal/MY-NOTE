
console.log(process.argv);

/* by deafult two argument
[
  '/usr/local/bin/node',
  '/Users/deepmandal/Desktop/LEARN CODING/GITHUB/MY-NOTE/006 WEB DEVELOPMENT/007 NODE JS/004_process.js'
]
*/


/* pass arguments :
deepmandal@Deeps-MacBook-Air 007 NODE JS % node 004_process.js hi suman mandal
[
  '/usr/local/bin/node',
  '/Users/deepmandal/Desktop/LEARN CODING/GITHUB/MY-NOTE/006 WEB DEVELOPMENT/007 NODE JS/004_process.js',
  'hi',
  'suman',
  'mandal'
]
*/
let x = process.argv;
for(let i=2 ; i< x.length; i++){
    console.log(x[i]);
}

/*Run : node 004_process.js hi suman mandal
output : 
hi
suman
mandal
*/