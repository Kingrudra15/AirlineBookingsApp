const { AirportService } = require('../services/index');


const airportService = new AirportService();

const create = async (req , res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            message: 'succesfully created a airport',
            err: {},
            data: response,
            succes: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succes: false,
            messagr: 'not able created a airport',
            err: error
        });
    }
};



module.exports = {
create
}