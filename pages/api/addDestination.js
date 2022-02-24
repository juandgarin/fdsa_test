
import {addDestination, destinations} from '../../data/db.js'
const { faker } = require('@faker-js/faker');

export default function handler(req, res) {
  if(req.method === 'POST'){
    const newDestination = {
      name: req.body.name,
      description: req.body.description,
      countryCode: req.body.countryCode,
      destinationType: req.body.destinationType,
      lastModify: faker.date.recent()
    }
    console.log(newDestination)
    const booleanResult = addDestination(newDestination);
    if(booleanResult){
      res.status(201).json({result: 'success'})
    }else{
      res.status(500).json({result: 'error'})
    }
}
    
}
