 
import {addDestination, destinations} from '../../data/db.js'
const { faker } = require('@faker-js/faker');
export default async function handler(req, res) {

 
  if(req.method === 'POST'){
 
    addDestination({
      name: req.body.name,
      description: req.body.description,
      countryCode: req.body.countryCode,
      destinationType: req.body.destinationType,
      lastModify: faker.date.recent()
    })
    res.status(201).json({result: 'success'})
  }else{
    res.status(200).json(destinations)
}
    
}
