const express = require('express');
const { memberRouter, eventRouter } = require('./routers');
const serviceLogger = require('./logger/logger'); 

const app = express();
const port = 8080;

const loggerService = (req, res, next) => {
    serviceLogger.saveLog(req);
    next();
}


app.use(express.json());
app.use(loggerService);

app.use('/api/members/', memberRouter);
app.use('/api/events/', eventRouter);



app.listen(port, () => {
    console.log(`Started server at port: ${port}`);   
})
