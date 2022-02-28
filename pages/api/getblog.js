import * as fs from 'fs';
//read file
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8' ,(err, data) => {
    if(err){
      res.status(500).send({'error' : 'wrong path'});
    }
    const response = JSON.parse(data);
    res.status(200).json(response);
  })
}
