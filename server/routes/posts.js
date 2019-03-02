const express = require('express');
const router = express.Router();

const axios = require('axios');

const postApi = 'https://jsonplaceholder.typicode.com';

module.exports = router.get('/data', (req, res) => {
    axios.get(`${postApi}/posts`).then(posts => {
        res.status(200).json(posts.data);
    })
        .catch(err => {
            res.status(500).send(err);
        })
});