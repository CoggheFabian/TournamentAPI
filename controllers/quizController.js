const express = require('express');
const router = express.Router();
const quizService = require("../services/quizService")
const tokenvalidator = require("../middelware/tokenvalidator")
const restHelper = require("../helpers/restHelper");

router.get('/:quizId', async function(req, res,next) {
    let quizId = req.params.quizId;
    let quiz = await quizService.getQuizByQuizId(quizId);
    if (quiz === null) res.status(404).json(`a quiz with Id ${quizId} was not found`);
    res.status(200).json({"quiz" : quiz, "URL" : restHelper.getQuizMainEndPoint("", req)})
});

router.post('/', async function(req, res, next) {
    let quizId = req.body.quizId;
    let quizOwnerId = req.body.quizOwnerId;
    let quizTitle = req.body.title;
    let startTime = req.body.startTime;
    let players =req.body.players;
    let rounds = req.body.rounds;
    let quizToAdd = await quizService.insertQuiz(quizId, quizOwnerId, quizTitle, startTime, players, rounds);
    res.status(201).json({"addedQuiz" : quizToAdd, "URL": restHelper.getQuizMainEndPoint(quizId, req)});
});






module.exports = router;
