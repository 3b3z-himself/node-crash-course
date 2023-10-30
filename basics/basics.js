// const name = "Ahmed";

// console.log(name);




// const int = setInterval(() => {
//     console.log('intertival');
// }, 1000)


// setTimeout(() => {
//     console.log('timeout');
// }, 3000)


// console.log(__dirname);
// console.log(__filename);

// const xyz = require('./mylibrary'); // require stands as import in python
// console.log(xyz);


// const {people} = require('./mylibrary') // this way people will be assigned to the key mylibrary.people directly (without ages)
// console.log(people)


// const {people, ages} = require('./mylibrary') // this way people will be assigned to the key mylibrary.people directly (without ages)
// for (const [index, person] of people.entries()) { // small practical test
//     console.log(ages[index], person);
// }



//  files system  // ----------------------------------------------------------------

const fs = require('fs');

// reading files
// fs.readFile('./test.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// writing files

// fs.writeFile('test.txt', 'hello world', (err, data) => {
//     console.log('file was writted')
// });

// directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('directory created');
//     });
// } else {
//     fs.rmdir('./assets',(err, data) => {
//     console.log('directory deleted');
// })
// }

// delete files

// if (fs.existsSync('./deleteme.txt')){
//    fs.unlink('deleteme.txt', (err) => {
//     if (err){
//         console.log(err);
//     }
//    }) 
// }
// end files system // ----------------------------------------------------------------