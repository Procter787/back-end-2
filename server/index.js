const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())



const {
    getHouses, 
    deleteHouse,
    createHouse,
    updateHouse
} = require('./controller');


app.get('/api/houses', ctrl.getHouse);
app.delete('/api/houses:houseId', deleteHouse);
app.post('/api/houses', addHouse);
app.put('/api/houses:houseId', updateHouse);