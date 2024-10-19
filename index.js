const express = require('express');
const { engine } = require ('express-handlebars');
const apiRouter = require('./routers/api.router');
const webRouter = require('./routers/web.router');
const serverConfig = require('./config/server.config');


const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views/layouts',
}));

app.use(express.static('./static'));
app.use('/', webRouter);
app.use('/api', apiRouter);



app.listen(serverConfig.port, () => {
    console.log('server start on port ' + serverConfig.port);
})



// function start() {
//     return new Promise((resolve, reject) => {
//         connection.connect((err) => {
//             if(err) {
//                 reject(err);
//                 return
//             }

//             app.listen(PORT, () => {
//                 resolve(PORT)
//                 return
//             })
//         })
//     })
// }

// start()
//     .then((port) => console.log("server start on port " + port))
//     .catch((err) => console.error("error starting ("+ err +")"))
