const { faker } = require('@faker-js/faker');
import json from './db.json'
 
export const destinations = json.destinations;

 

    export const addDestination = (destination) => {
        try{
            const lastId = destinations[destinations.length - 1].id;
            const newDestination = {
                id: (parseInt(lastId) +1).toString(),
                name: destination.name,
                description: destination.description,
                countryCode: destination.countryCode,
                destinationType: destination.destinationType,
                lastModify: faker.date.recent()
            }
            destinations.push(newDestination);
            return true;
        }catch(err){
            console.log(err);
            return false
        }
    }

    export const editDestination = (destination) => {
        try{
            const index = destinations.findIndex(d => d.id === destination.id);
            destinations[index] = destination; 
            return true;
        }catch(err){
            console.error(err)
            return false;
        }
    }

    export const deleteById = (id) => {
        try{
            const index = destinations.findIndex(d => d.id === id);
            destinations.splice(index, 1);
        }catch(err){
            console.error(err);
            return false
        }
        return true;
    }




    

 