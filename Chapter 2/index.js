// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const fsPromises = require('fs').promises;
const path = require('path');
const fs = require('fs');


const fileOps= async () =>{
  try{
    const data = await fsPromises.readFile(path.join(__dirname, 'Chapter 2', 'test.txt'), 'utf-8')
  }

  catch(err){
    console.log(err)
  }
}
fs.readFile(path.join(__dirname, 'test.txt'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});



//reads file
/*fs.readFile(path.join(__dirname, 'Chapter 2', 'test.txt'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/
console.log('hello');

//creates and writes to file
/*fs.writeFile(path.join(__dirname, 'Chapter 2', 'te.txt'), 'Hey', (err) => {
  if (err) throw err;
  console.log('Write complete');
});*/

const files = () => {
/* fs.appendFile(path.join(__dirname, 'Chapter 2', 'test.txt'), 'Testing text', (err) => {
  if (err) throw err;
  console.log('Append complete');
});
// utf-8 - defines the encoding of the data

// indented fs function calls
fs.writeFile(path.join(__dirname, 'Chapter 2', 'ind.txt'), "Hello", (err) =>{
  if (err) throw exit;
  console.log(("Write Completed"))
   
  
  // writes to the file
  fs.appendFile(path.join(__dirname, 'Chapter 2', 'ind.txt'), "12", (err) =>{
    if (err) throw exit;
    console.log("Append complete")
    
    // renames file
    fs.rename(path.join(__dirname, 'Chapter 2', 'ind.txt'), path.join(__dirname, 'Chapter 2', 'new'), (err) => {
      if (err) throw exit;
      console.log(" Rename Complete");
    })
  })
})
}
*/
// exit on uncaught errors
process.on('uncaughtException', (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})}
