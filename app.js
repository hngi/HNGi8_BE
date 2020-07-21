const express = require('express');
const bodyParser = require('body-parser');


const PORT = process.env.PORT || 3000
const app = express();


app.use(bodyParser.json());



app.listen(PORT,() => {
    console.log(`Server is listening in port ${PORT}`);
})