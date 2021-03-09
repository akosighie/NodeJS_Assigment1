const express = require('express');
const { userRouter } = require('./routers');

const app = express();
const port = 8080;


app.use(express.json());

app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`Started server at port: ${port}`);   
})
