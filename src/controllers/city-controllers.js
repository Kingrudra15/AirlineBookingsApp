const { CityService } = require('../services/index');
const cityService = new CityService()

/**
 * POST
 * data - req.body                         
 */

const create = async (req , res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            succes: true,
            messagr: 'succesfully created a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succes: false,
            messagr: 'notable created a city',
            err: error
        });
    }
};

//delete --> /city/:id

const destroy = async (req , res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: response,
            succes: true,
            messagr: 'succesfully delete a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succes: false,
            messagr: 'not able delete a city',
            err: error
        });
    }
};

// Get -> /city/:id

const get = async (req , res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: response,
            succes: true,
            messagr: 'succesfully fetch a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succes: false,
            messagr: 'notable get a city',
            err: error
        });
    }
};

// patch --> /city/:id -> req.body

const update = async (req , res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            succes: true,
            messagr: 'succesfully update a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            succes: false,
            messagr: 'notable update a city',
            err: error
        });
    }
};

module.exports = {
    create,
    destroy,
    get,
    update
}