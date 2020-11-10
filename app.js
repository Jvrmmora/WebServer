const express = require('express');
const app = express();

const path = require('path');


//settings
app.set('port', process.env.PORT || 8080);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} -${req.method}`);
    next();
});

//routes
app.use(routes);


//static files

//start server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'))
} );
