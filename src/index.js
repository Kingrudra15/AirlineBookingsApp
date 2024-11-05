const express = require("express");
const bodyParser = require("body-parser")

const { PORT } = require('./config/serverConfig')

const setupandstartServer = async () => {

    // creat the express object
    const app = express();

    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, () => {
        console.log(`SERVER STARTING AT ${PORT}`);
        //console.log(process.env);
        
    })

}

setupandstartServer();