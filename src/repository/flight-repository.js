const {Flights} = require('../models/index'); 
const {Op} = require('sequelize')

class FlightRepository {
   // here we created a custom filter
    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }

        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter, {
        //         [Op.and]: [
        //             {price: {[Op.lte]: data.maxPrice}},
        //             {price: {[Op.gte]: data.minPrice}},
        //         ]
        //     })
        // }
        let priceFilter = [];

        if(data.minPrice){
            // Object.assign(filter,{price: {[Op.gte]: data.minPrice}})
            priceFilter.push({price: {[Op.gte]: data.minPrice}})
        }
        if(data.maxPrice){
            // Object.assign(filter,{price: {[Op.lte]: data.maxPrice}})
            priceFilter.push({price: {[Op.lte]: data.maxPrice}})
        }
        Object.assign(filter,{[Op.and]: priceFilter})
        console.log(filter);
        
        return filter;
    }

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;

        }catch (error){
            console.log("something went wrong in the repository layer");
            throw {error}
        }
    }


    async getFlight(flightID){
        try {
            const Flight = await Flights.findByPk(flightID);
            return Flight;
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw { error }
        }
    }


    async getAllFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const Flight = await Flights.findAll({
                where: filterObject
            });
            return Flight;
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw { error }
        }
    }



}


module.exports = FlightRepository;