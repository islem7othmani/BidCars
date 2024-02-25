const { register,login } = require("../Controllers/authC")
const {getUser} = require('../Controllers/userC')


const route = require ("express").Router();

route.post("/register",register)
route.post("/login",login)
route.get("/user/:email",getUser)



module.exports = route;