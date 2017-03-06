'use strict';

const express = require('express');

//Constants
const PORT = 8000;


//APP

const app = express();

app.get('/',function (req,res) {
	res.send('Hello World\n');
});

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);


