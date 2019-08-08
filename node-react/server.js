const express = require('express');
var request = require('request');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/mensagem', (req, res) => {
  console.log("caindo aqui");
  res.send({ express: 'Hello From Express' });
});

app.get('/teste', (req, res) => {
  console.log("caindo aqui");
  var urlTest = 'http://192.168.15.5:8880/api/testecnm';
  request(urlTest, function (error, response) {
    console.log("cai aqui")
    //verificar se o gravatar existe - se ele não existe vai retornar 404 devido ao parametro passado ao api
    if (!error && response.statusCode == 200) {
      console.log(response);
      console.log('status é ok, achou');
      res.send(response.body);
    }
  });

});
app.listen(port, () => console.log(`Listening on port ${port}`));
