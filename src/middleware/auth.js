const adminauth = (req,res,next) => {

    // check the request is authenticated, if it is actually from the admin side
    const token = "xyz"
    const isadminAuthorized = token ==="xyz"
    if(!isadminAuthorized){
        res.status(404).send("unauthorized data")
    }
    else{
        next()
    }
}

module.exports = {
    adminauth,
}