// Dans cette tâche, vous devrez :

const http =require("http")
const server = http.createServer((req,res)=>{
    res.hasHeader("content-type","text/plain")
    res.end("HELLO WORLD")
})
//Dans cette tâche, vous devrez :


const port=3000
server.listen(port,()=>{
    console.log("Bonjour Node")})
   
    // Dans cette tâche, vous devrez :
    var fs = require("fs");
var data = fs.readFileSync('welcome.txt');

console.log(data.toString());
console.log("Program Ended");

// Dans cette tâche, vous devrez :




