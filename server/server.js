//include the routes file
require("dotenv").config({ path: ".env" });


const express = require("express"),
  app = express(),
  PORT = process.env.PORT,
//npm install cors
//npm install cors --save
 cors = require("cors");



app.use(express.json());
app.use(cors());

require("./router")(app);




app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
console.log("in server.js");

//to run:
//npm i dotenv
//npm i express
//mpm i mongoose
//node '.\server.js'  ->run also db-connections

// server
// => router -app.post
// =>bl/logicControllers/exerciseLogic-  create
// => dl/controllers/ExerciseController - create
// =>dl/Models/exersicemodele - create

// index
// => router -app.get
//if params-  =>bl/logicControllers/exerciseLogic-  read
//if not params  =>bl/logicControllers/generallogic- getSingleExercise  -> exerciseLogic-  read
// => dl/controllers/ExerciseController - read
// =>dl/Models/exersicemodele - read
