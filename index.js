
// import the packages

const express = require("express");
const fs = require("fs");
const path= require("path")
const dirName = path.join(__dirname, "timeStamps")

// initialize express server framework

const app = express();

// first get server
app.get("/",(req,res)=>{
    res.send("hi i am working good");
})
//second get server
app.get("/date-time",(req,res)=>{

   let date = new Date();
   let currentTimeStamp = date.toUTCString().slice(0,-3);
   console.log(currentTimeStamp)

   console.log(dirName)

   let content = `The last updted timeStamp : ${currentTimeStamp}`

   fs.writeFile(`${dirName}/date-time.text`,content, (error)=>{
    if(error){
        res.send("error in the file")
        return
    }
    res.sendFile(path.join(dirName,"date-time.text"))
   })
})

//listen to a server
app.listen(9000, ()=>console.log(`server started in localhost:9000`));

