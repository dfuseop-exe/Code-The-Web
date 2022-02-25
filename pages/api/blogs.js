import * as fs from 'fs';

export default function handler(req, res) {
  //methods gives res in json
  fs.readdir('blogdata','utf-8' ,(err, data) => {
    if(err){
      res.status(500).send({'error' : 'wrong path'});
    }
    console.log(data);
    res.status(200).json(data)
  })
}
