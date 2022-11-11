const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const corsOptions = require('./config/corsOptions');
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials'); 
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT =  process.env.PORT ? process.env.PORT : 8000;


//mkdir -p "$d" && cp file "$d"
//and maybe wait command
//------------------------------------------------------------------------------------------------------
//https://www.coreycleary.me/why-should-you-separate-controllers-from-services-in-node-rest-apis
//Explains the Difference between Controllers and Services
//https://dev.to/edwinwong90/tips-to-create-a-constants-file-in-javascript-cnm
//CONSTANTS
 
//REMOVE LATER SINCE WE DONT NEED IT IN THIS FILE
const DatabaseManager = require('./database/DatabaseManager')

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);
// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//middleware for cookies 
app.use(cookieParser());

//---------------------------------------------------//
// ---------- Public Server Routes Below ----------- //
//---------------------------------------------------//

//app.use('/register', require('./routes/register'));
app.use('/promotion', require('./routes/api/promotion'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
//app.use('/logout', require('./routes/logout'));

if (process.env.REACT_APP_ENVIRONMENT === "production") {
  console.log("Production Enviorment Has Started Running:")
 
  const reactBuild = path.join(__dirname, "../client/build")
  app.use(express.static(reactBuild));

  app.get("*", async (req, res) =>
    res.sendFile(path.join(reactBuild , "index.html"))
  ); 
} else {
  console.log("Development Enviorment Has Started Running:")

  app.get("/", (req, res) => { res.send("API is running.."); });
}

//---------------------------------------------------//
// --- Json Web Token Authenticated Routes Below --- //
//---------------------------------------------------//
app.use(verifyJWT); 
app.use('/user', require('./routes/api/user'));
app.use('/activity', require('./routes/api/activity'));


  
 
//A TEST FUNCTION ABOUT TO BE READY TO GET RID OF THIS
app.post('/pingpong', async function (req, res) {
    console.log("We have recieved: ", req.body.data)
    res.send({ data: "pong" })  

});

//custom Error Handler for the App
app.use(errorHandler);
app.listen(PORT, () => console.log(`- Server running on port ${PORT}`));