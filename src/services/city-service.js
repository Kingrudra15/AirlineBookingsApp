const {CityRepository} = require('../repository/index');

class cityService {
    constructor(){
        this.cityRepository = new CityRepository
    }


    async createCity(data) {
        try {
            
        } catch (error) {
            console.log("somethning went wrong at service layer");
            throw {error};
            
        }

    }

    async deleteCity(cityId) {
        try {
            const city = await this.cityRepository.createCity(cityId);
            return city;
        } catch (error) {
            console.log("somethning went wrong at service layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const response = await this.cityRepository.deleteCity(cityId,data);
            return response;
        } catch (error) {
            console.log("somethning went wrong at service layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("somethning went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = cityService;