var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', function(req, res) {
  res.send("OK")
});

app.get('/hacercookie', (req, res) => {
  res.cookie(`Nombre de la cookie`,`algún valor`);
  res.send('Se ha creado la cookie exitosamente 👉🍪');
});

app.get('/buscarcookie', (req, res) => {
  console.log(req.cookies)
  res.send(req.cookies);
});

app.get('/borrarcookie', (req, res) => {
  res.clearCookie()
  res.send('Se ha borrado la cookie exitosamente 👋🍪');
});

app.listen(process.env.PORT || 3000, (a) => {
  console.log("Servidor disponible en http://localhost:3000")
});
 
