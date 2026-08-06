const express = require("express");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.post("/signup", function(req, res) {

})

app.post("/login", function(req, res) {

})

app.get("/buy", function(req, res) {

})

app.get('/see-all-courses', function(req, res) {

})


app.listen(3000);