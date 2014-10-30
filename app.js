var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

var port = 1234;
app.listen(port);

app.use(express.static(path.join(__dirname, 'public')));

var template = '<li class="fa-code"><a href="files/[[]]">[[]]</a></li>';

var getlinks = function(links) {
  console.log(links);
  var ans = links.map(function(data) {
    return template.replace('[[]]', data)
                   .replace('[[]]', data); 
  });
  console.log(ans);
  return ans.join('');
}

app.get('/galdos', function(req, res) {
  console.log('gg');
  fs.readFile('./public/index.html', 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    } 

    fs.readdir('./public/files/', function (err, files) {
      res.send(
        data.replace(
          '[[]]', 
          getlinks(files.filter(function(file) {
            return file[0] == '.';
          }))
      ));
    })
  });
});

