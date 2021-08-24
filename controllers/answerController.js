const express = require('express');
const router = express.Router();
const answerService = require("../services/answerService")
const tokenvalidator = require("../middelware/tokenvalidator")
const restHelper = require("../helpers/restHelper");

router.get('/', async function(req, res) {
    let boe = await answerService.insertAnswerForQuestion("hallo", "612240e22c4d342978b8dfa2" , "1" )
    res.send(boe);
});

router.post('/', async function(req, res, next) {

});






module.exports = router;
