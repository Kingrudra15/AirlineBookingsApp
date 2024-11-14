const express = require("express");
const bodyParser = require("body-parser")

const { PORT } = require('./config/serverConfig');

const ApiRoutes = require('./routes/index')

const setupandstartServer = async () => {

    // creat the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api', ApiRoutes);

    
    app.listen(PORT, () => {
        console.log(`SERVER STARTING AT ${PORT}`);

        
    })

}

setupandstartServer();