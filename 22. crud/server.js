var express = require('express'),
        app = express();

app
        .use(express.static('./app'))
        .get('*', function(req, res) {
            res.sendFile(__dirname + '/app/index.html');
        })
        .listen(3000);
console.log('Server running at http://127.0.0.1:3000/');
console.log('To stop server press ctrl+c');
