const express = require('express');
const adminMiddleware = require('../middleware/admin');
const router = express.Router();


router.post('/signup', async (req, res) => {
    const username = req.body.username; 
    const password = req.body.password; 

    // check if a user with this username already exists
    await Admin.create({
        username: username, 
        password: password
    })

    res.json({
        message: "admin create successfully"
    });
});

router.post('/courses', adminMiddleware, (req, res) => {

});

router.get('/courses', adminMiddleware, (req, res) =>{

})

module.exports = router; 
