
import {editDestination} from '../../data/db.js'
const { faker } = require('@faker-js/faker');
export default function handler(req, res) {
  if(req.method === 'PUT'){
    const editedDestination = {
      id: req.body.id,
      name: req.body.name,
      description: req.body.description || '',
      countryCode: req.body.countryCode || '',
      destinationType: req.body.destinationType || '',
      lastModify: faker.date.recent()
    }
    const booleanResult = editDestination(editedDestination);
 
    if(booleanResult){
      res.status(201).json({result: 'success'})
    }else{
      res.status(500).json({result: 'error'})
    }
}
}
