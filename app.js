import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as querystring from 'querystring'
import * as http from 'http'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static(path.join(__dirname, 'presentationLayer')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/presentationLayer`);
});


app.get('/addProduct', urlencodedParser, function (
  request,
  response
) {
  response.sendFile(__dirname + '/presentationLayer')
})
app.post('/addProduct', urlencodedParser,  async function (
  request,
  response
) {
  if (!request.body) return response.sendStatus(400)
      let result = await f.chainOfResponsibility(request.originalUrl, request.body)
      response.send(
        result
      )
  
})

app.get('/viewProduct',urlencodedParser,  function (
  request,
  response
) {
  response.sendFile(__dirname + '/presentationLayer')
})
app.post('/viewProduct',urlencodedParser,async function (
  request,
  response
) {
  if (!request.body) return response.sendStatus(400)
  let result = await f.chainOfResponsibility(request.originalUrl, request.body)
  
  response.send(
      result
      )
  
})


app.get('/updateProduct',urlencodedParser,  function (
  request,
  response
) {
  response.sendFile(__dirname + '/presentationLayer')
})
app.post('/updateProduct',urlencodedParser, async function (
  request,
  response
) {
  if (!request.body) return response.sendStatus(400)
  let result = await f.chainOfResponsibility(request.originalUrl, request.body)
  
  response.send(
     result
      )
  
})


app.get('/deleteProduct',urlencodedParser,  function (
  request,
  response
) {
  response.sendFile(__dirname + '/presentationLayer')
})
app.post('/deleteProduct',urlencodedParser, async function (

  request,
  response
) {
  if (!request.body) return response.sendStatus(400)
   let result = await f.chainOfResponsibility(request.originalUrl, request.body)
  
  response.send(
      result
      )
  
})

app.get('/price-list/', urlencodedParser, function (req, res) {
  var data = querystring.stringify({
    username: 'myname',
    password: 'pass'
  });

  var options = {
    host: 'localhost',
    port: 3001,
    path: '/price-list/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  var httpreq = http.request(options, function (response) {
    response.setEncoding('utf8');
    let body;
    response.on('data', function (chunk) {
      body = chunk;
    });
    response.on('end', function() {

      res.send(body);
    })
  });
  httpreq.write(data);
  httpreq.end();
});




app.get("/search", urlencodedParser, function (req, res) {
  let url = req.query.query
  var data = querystring.stringify({
    username: 'myname',
    password: 'pass'
  });

  var options = {
    host: 'localhost',
    port: 3002,
    path: req.originalUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  var httpreq = http.request(options, function (response) {
    response.setEncoding('utf8');
    let body;
    response.on('data', function (chunk) {
      body = chunk;
    });
    response.on('end', function() {

      res.send(body);
    })
  });
  httpreq.write(data);
  httpreq.end();
});


app.get('/details/*', urlencodedParser, function (req, res) {
 
  var data = querystring.stringify({
    username: 'myname',
    password: 'pass'
  });

  var options = {
    host: 'localhost',
    port: 3001,
    path: req.originalUrl,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  var httpreq = http.request(options, function (response) {
    response.setEncoding('utf8');
    let body;
    response.on('data', function (chunk) {
      body = chunk;
    });
    response.on('end', function() {
      res.send(body);
    })
  });
  httpreq.write(data);
  httpreq.end();
});







app.listen(3000, () => {
    console.log('Application listening on port 3000!');
});





import {f} from './businesLayer/fasad.js';