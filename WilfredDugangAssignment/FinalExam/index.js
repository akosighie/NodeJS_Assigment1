const express = require('express');
const { memberRouter, eventRouter } = require('./routers');

const app = express();
const port = 8080;


app.use(express.json());

app.use('/api/members/', memberRouter);
app.use('/api/events/', eventRouter);


app.listen(port, () => {
    console.log(`Started server at port: ${port}`);   
})
