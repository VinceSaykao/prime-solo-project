const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



// this will GET from the client's informations from the database
router.get('/', (req,res) => {
    if (req.isAuthenticated()) {
        pool
        .query(`select * from clients order by id asc;`)
        .then((results) => res.send(results.rows))
        .catch((error) => {
            console.log('Error making select for get client info', error);
            res.sendStatus(500);
        })
    };
}); // end of GET

router.get('/:id', (req,res) => {
    let id = req.params.id;
    if (req.isAuthenticated()) {
        pool
        .query(`select * from timesheet where id = $1;`, [id])
        .then((results) => res.send(results.rows))
        .catch((error) => {
            console.log('Error making select for get client info', error);
            res.sendStatus(500);
        })
    };
}); // end of GET


module.exports = router;