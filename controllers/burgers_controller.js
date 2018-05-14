const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burgers.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post('/api/burgers', function(req, res) {
    console.log(req.body)
    burger.insertOne('burger_name', [req.body.burger_name], function(result) {
      // Send back the ID of the new quote
      console.log(result)
      res.end();
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    burger.updateOne('devoured', 1, 'id', req.params.id, function(result) {

        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
// Export routes for server.js to use.
module.exports = router;