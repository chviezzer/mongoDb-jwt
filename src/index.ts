// require('dotenv').config();
import * as dotenv from 'dotenv';

import express from 'express';

dotenv.config();
const app = express();


 
app.get('/', (_req, res) => {
    res.status(200).send('<h2>It is workig</h2>')
});
app.set('port', process.env.PORT)
app.listen(app.get('port'), ()=> console.log(`The server is running on port: ${app.get('port')}`));

// app.set('port', process.env.PORT);

// app.listen(app.get('port'),()=> {
    
//     console.log(`The server is running on port: ${app.get('port')}`)
    
// });