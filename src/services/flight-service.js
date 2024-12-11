
const { FlightRepository, AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            // Validate time: If arrivalTime is not later than departureTime, throw an error
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: 'Arrival time cannot be less than or equal to departure time' };
            }

            // Fetch airplane details
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);

            // Create flight with total seats
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity,
            });

            return flight;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw { error };
        }
    }

    async getAllFlightData(data){
        try {
            console.log("Filter Data Received:", data);
            const flights = await this.flightRepository.getAllFlight(data)
            return flights;
        } catch (error) {
            console.log("sonething went wrong at service layer");
            throw error;            
        }
           }

}

module.exports = FlightService;
//     /**
//      * {
//      * flightnumber,
//      * airplaneId
//      * departureAirportId
//      * arrivalAirportId
//      * arrivalTime
//      * departureTime
//      * price
//      * total seath---> from airplain
//      * }
//      */

//     
