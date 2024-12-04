// Step 1: Install Express.js via the terminal command:
// 'npm install express' or the shorthand version 'npm i express'

// Step 2: Import the express module using 'require', name the variable express
const express = require("express")
// Step 3: Create an instance of express() and name the variable 'app'
const app = express()

app.get("/", (request, response)=> {
   response.send("lalala")
})

app.get("/image", (request, response)=> {
    response.send('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrgVj6z0tfzZSheYRKDWVUhB5zIkiZ9vUo6rFSULPgctqkQSmlkwfCDZ1RMHxgFF2XKIlAJb_28QzyZaR5s6zfQ"></img>')
})

// Step 4: Set up the server using 'app.listen'. 
// Set the port is set to 3000. 
// Leave the callback function empty for now.
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})

app.get("/fact/random",(request,response)=>{
    response.json({
        "fact": "Racoons can live up to 20 years"
    })
})
// Step 5: Start your server by running the index.js file
// Notice how the terminal is running but nothing is being console logged. 
// Stop your server by using the command ctrl + c

// Step 6: Console log "Server is running at http://localhost:3000" inside the callback function. 
// Restart your server

// Step 7: Follow the local host URL. 

