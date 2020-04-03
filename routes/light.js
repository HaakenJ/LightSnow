require("dotenv").config();
const express = require("express");
const router = express.Router();
const axios = require("axios");

// Route to set the current state of the light.
router.post("/light", (req, res) => {
    const token = process.env.LIGHT_TOKEN;

    axios({
        headers: {
            "Authorization": `Bearer ${token}`
        },
        url: "https://api.lifx.com/v1/lights/all/toggle",
        method: "POST"
    })
    .then(() => {
        res.status(200).end();
    })
    .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
})

// Route to get the current state of the light.
router.get("/light", (req, res) => {
    const token = process.env.LIGHT_TOKEN;

    axios({
        headers: {
            "Authorization": `Bearer ${token}`
        },
        url: "https://api.lifx.com/v1/lights/all/",
        method: "GET"
    })
    .then(result => {
        res.send(result.data[0].power);
    })
    .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
})

module.exports = router;
