const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

// this will GET the timesheet from the database
router.get('/', (req, res) => {
    // GET route code here

    if (req.isAuthenticated()) {
        pool
            .query(`select * from timesheet;`)
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error making SELECT for secrets:', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});


        module.exports = router;
