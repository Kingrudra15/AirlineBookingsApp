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
            const city = await City.findByPk(cityID)
        } catch (error) {
            console.log("something went wrong in the repo layer");
            throw { error }
        }
    }
}

module.exports = CityRepository;