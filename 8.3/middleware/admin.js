const { Admin } = require('../db');

async function adminMiddleware(req, res, next) {
    const username = req.headers.username; 
    const password = req.headers.password; 
    
    const response = await Admin.findOne({
        username: username, 
        password: password
    })

    if(response) {
        next();
    }
    else{
        res.status(403).json({
            msg: "user doesnot exist"
        })
    }
}

module.exports = adminMiddleware;