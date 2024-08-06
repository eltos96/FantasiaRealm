//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import open from 'open';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {

  const password =req.body.password;
if ('lion' == password){
//  console.log(true); 
res.sendFile(__dirname + "/public/secret.html");

// opens the url in the default browser 
open('https://roshan26.my.canva.site/add-a-heading ');
 const myURL = new URL('https://roshan26.my.canva.site/add-a-heading ');
//res.send(`${myURL}`);
  
  
} 
else{
  res.sendFile(__dirname + "/public/index.html");
}


    
 
    // console.log("Hashed password:", hashedPassword);
});  
      
        

 
 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


