const express = require("express");

const { PORT } = require('./config/serverConfig')

const setupandstartServer = async () => {

    // creat the express object
    const app = express();
    app.listen(PORT, () => {
        console.log(`SERVER STARTING AT ${PORT}`);
        //console.log(process.env);
        
    })

}

setupandstartServer();