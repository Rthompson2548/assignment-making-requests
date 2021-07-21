const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

// The index() function should return all 
// of the constellation resources.

function index() {
    axios
        .get(`${BASE_URL}/constellations`)
        .then((constellation) => {
            console.log(constellation.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

// The create() function should take an object, 
// body, and create a new constellation.

function create(body) {
    axios
        .post(`${BASE_URL}/constellations`, {
            name: body.name,
            meaning: body.meaning,
            starsWithPlanets: body.starsWithPlanets,
            quadrant: body.quadrant,
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(response.data);
        });
}

// The show() function should take an id and return 
// a constellation for the given constellation.

function show(id) {
    axios
        .get(`${BASE_URL}/constellations/${id}`)
        .then((constellation) => {
            console.log(constellation.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

// The update() function should take an id and an 
// object, body, and update the given constellation.

function update(id, body) {
    axios.put(`${BASE_URL}/constellations/${id}`, body)
        .then((constellation) => {
            console.log(constellation.data)
        })
        .catch((error) => {
            console.log(error.message)
        });
}

// The destroy() function should take an id 
// and destroy the given constellation.


function destroy(id) {
    axios
        .delete(`${BASE_URL}/constellations/${id}`, id)
        .then((constellation) => {
            console.log(constellation.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy,
};