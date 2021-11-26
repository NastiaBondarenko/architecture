import express from 'express';
import path from 'path';
// const path = require('path');
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app2 = express();

const urlencodedParser = express.urlencoded({extended: false});


let info = [
{
  product_id :  8,
  name: 'шкаф дубовий',
  price:1900
},
{
  product_id : 9,
  name: 'диван червоний',
  price: 4500
},
{
  product_id : 10,
  name: 'набір стільців',
  price: 15000
},
{
  product_id : 11,
  name: 'табуретка',
  price: 300
},
{
  product_id : 12,
  name: 'поличка дубова',
  price: 800
},
{
  product_id : 13,
  name: 'ліжко дитяче',
  price: 3000
}
]


app2.listen(3002, () => {
    console.log('Application listening on port 3002!');
});


function searchInfo(url){
  let result = []

  for (var i = 0; i < info.length; i++) {
    if((info[i].name == url.name || url.name == '') && (info[i].price <  Number(url.priceTo)  || url.priceTo == '')
     && (info[i].price >  Number(url.priceFrom)  || url.priceFrom == ''))  result.push(info[i])
  }
  return result
}


app2.post('/search', urlencodedParser, (req, res) => {
  let result =  searchInfo(req.query)

  res.send(result)
});


