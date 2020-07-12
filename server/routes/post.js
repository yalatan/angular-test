const express = require('express');
const router = express.Router();
const UserPost = require('../models/User');

router.get('/', async (req, res) => {
    try{
        const post = await UserPost.find();
        res.json(post);
    }
    catch{
        err => {
            res.json({ message: err})
        }
    }
});

router.post('/', async (req, res) => {
const post = new UserPost({
firstname: req.body.firstname,
lastname: req.body.lastname,
email: req.body.email,
password: req.body.password
});
try{
    const savePOst = await post.save();
    res.json(savePOst);
}
catch{
    err => {
        res.json({ message: err})
    }
}


});


module.exports = router;