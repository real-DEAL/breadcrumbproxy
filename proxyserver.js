const app = require('express')();

const proxy = require('express-http-proxy');


// app.use('/test', proxy("http://192.168.99.100");
// app.use('/', (req, res) => { res.send('herro'); });
app.use('/api', proxy('http://192.168.99.100:3000/'));
app.use('/vision', proxy('http://192.168.99.100:5000/'));
app.listen(process.env.PORT || 7000);
