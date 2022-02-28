import * as fs from 'fs';
//all data files
export default async function handler(req, res) {
    let data = await fs.promises.readdir('blogdata');
    let allData = [] ;
    let myfile ;
    for (let i = 0 ; i < data.length ; i++) {
      const ele = data[i];
      myfile = await fs.promises.readFile(('blogdata/' + ele) , 'utf-8');
      allData.push(JSON.parse(myfile));
    }
    res.status(200).json(allData);
}
