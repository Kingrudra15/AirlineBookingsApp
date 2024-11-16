const { Op } = require('sequelize')

const { City } = require('../models/index');


class  CityRepository{
    async createCity({ name }){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){

        }
    }
    
    async deleteCity(cityID) {
        try {
            await City.destroy({
                where: {
                    id: cityID
                }
            });
            return true;
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw { error }
        }
    }


    async updateCity(cityID, data) {
        try {
            // also work but will not return updated object 
            // const city = await City.update(data,{
            //     where: {
            //         id: cityID
            //     }  
            // });
            // return updated object
            const city = await City.findByPk(cityID);
            city.name = data.name;
            await city.save();
            return city;
        // when we check in postman we will get empty data so we can do like that also it is recomended when you need return object 
            return city
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw { error }
        }
    }


    async getCity(cityID) {
        try {
            const city = await City.findByPk(cityID);
            return city;
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw { error }
        }
    }

    async getAllCities(filter){
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                }) 
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            //return cities;
            console.log("something went wrong in the repo layer");
            throw { error }  
        }
    }
}

module.exports = CityRepository;