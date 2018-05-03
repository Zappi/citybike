const fs = require('fs')
const axios = require('axios')
const readline = require('readline-sync')

const cityBikeService = require('./service/cityBikeService')

const API_URL = 'http://api.citybik.es/v2/networks/citybikes-helsinki'


//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//})
let options = []

getAllBikes(function (resp) {
    options = res.send(resp)
})


function getAllBikes(resp) {
    axios.get(API_URL)
        .then(res => {
            data = res.data.network.stations
            findRequestedStation(data)
        })
}

function findRequestedStation(stations) {
    let filter = getInput()

    for (let i = 0; i < stations.length; i++) {
        if (stations[i].name.toLowerCase().includes(filter)) {
            options.push(stations[i])
        }
    }
    console.log(options.length)
    console.log(options)
}

function getInput() {

    const searchedStation = readline.question(' ')
    return searchedStation.toLowerCase()
}

