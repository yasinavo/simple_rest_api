const express = require('express');
const router = express.Router();
const Member = require('../models/memeber');


// get a list of members from the database
router.get('/members', function (req, res,next) {
  Member.geoNear(
      {type:'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
      {maxDistance: 100000,spherical:true}
  ).then(function (members) {
       res.send(members)
    });
});


// add a new member to DB
router.post('/members', function (req, res, next) {
    Member.create(req.body).then(function (member) {
        res.send(member);
    }).catch(next);

});


// update a member in the DB
router.put('/members/:id', function (req, res, next) {
    Member.findByIdAndUpdate({_id:req.params.id},req.body).then(function () {
        Member.findOne({_id:req.params.id}).then(function (member) {
            res.send(member);
        });

    });
});



// delete a member in the DB
router.delete('/members/:id', function (req, res, next) {
    Member.findByIdAndRemove({_id:req.params.id}).then(function (member) {
        res.send(member);
    });

});



module.exports = router;
