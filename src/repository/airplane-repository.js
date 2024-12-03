const {Airplane} = require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplain = await Airplane.findByPk(id);
            return airplain;
        } catch (error) {
            console.log("something went wrong in the repository layer");
            throw {error}
        }
    }
}

module.exports = AirplaneRepository;
