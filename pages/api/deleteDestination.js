
import {deleteById} from '../../data/db.js'
export default function handler(req, res) {
  if(req.method === 'DELETE'){
    const booleanResult = deleteById(req.body.id);
    if(booleanResult){
        res.status(201).json({result: 'success'})
      }else{
        res.status(500).json({result: 'error'})
      }
}   

}
