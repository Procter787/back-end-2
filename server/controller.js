const movies = require('./db.json');
let id = 4;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let index = houses.findindex(elem => elem.Id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)

    },
    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body;

        const newHouse = {
            id,
            address,
            rating,
            imageURL
        }
        houses.push(newHouse);
        id++;

    },
    updateHouse: (req, res) => {
        const { houseId } = req.params;
        const { type } = req.body;
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price =0
            res.status(200).send(houses)
        } else if(type === 'plus') {
            houses[index].price += 1000
            res.status(200).send(houses)

        } else if(type === 'minus') {
            houses[index].price -= 1000
            res.status(200).send(houses)

        } else{
            res.sendStatus(400)

        }

        }

    }



}

