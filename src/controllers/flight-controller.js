const {FlightService} = require('../services/index')

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success: true,
            err: {},
            message: 'succesfully created a flight'
        }) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succes: false,
            messagr: 'not able created a flight',
            err: error
        });
    }
}

const getAll = async(req,res) => {
    try{
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            sucess: false,
            err: {},
            message: "successfully fetch the  flight",
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            sucess: false,
            message: "not able to fetch the  flight",
            err: error
        });
    }
}

module.exports = {
    create,getAll
}