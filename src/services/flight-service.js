const {FlightRepository, AirplaneRepository} = require('../repository/index')

class  FlightService {

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            const airplain = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats:airplain.capacity
            });
            return flight;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }

    async getFlightData(){
        //todo
    }
    }

    module.exports = FlightService;

    /**
     * {
     * flightnumber,
     * airplaneId
     * departureAirportId
     * arrivalAirportId
     * arrivalTime
     * departureTime
     * price
     * total seath---> from airplain
     * }
     */