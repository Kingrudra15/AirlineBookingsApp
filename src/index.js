const express = require("express");
const bodyParser = require("body-parser")

const { PORT } = require('./config/serverConfig')
const CityRepository = require('./repository/city-repository')

const setupandstartServer = async () => {

    // creat the express object
    const app = express();

    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.listen(PORT, () => {
        console.log(`SERVER STARTING AT ${PORT}`);
        const repo = new CityRepository();
        repo.deleteCity(1)
        //console.log(process.env);
        
    })

}

setupandstartServer();