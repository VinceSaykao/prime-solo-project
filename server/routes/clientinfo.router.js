const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



// this will GET from the client's informations from the database
router.get('/', (req,res) => {
    if (req.isAuthenticated()) {
        pool
        .query(`select * from clients;`)
        .then((results) => res.send(results.rows))
        .catch((error) => {
            console.log('Error making select for get client info', error);
            res.sendStatus(500);
        })
    };
}); // end of GET


module.exports = router;