const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { mongoose } = require('./db');

const PORT = 5000;



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

var whitelist = ['*'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes('*') || !origin) {
      callback(null, true)
    } else {
      callback(new Error('not access'))
    }
  }  
}

app.use(cors(corsOptions));

app.get('/', function(req, res){
  res.send('api test grupo modelo by Juan Carlos Mendez Hernandez\n juancarlosmh095@gmail.com')    
});
/* importamos el router creado */
app.use('', require('./routers/principal.routes'));

app.listen(5000, () => {
  console.log(`PUERTO =  ${PORT}`);
});