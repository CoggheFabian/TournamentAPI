const dbContext = require("../model/dbContext.js")


function insertQuiz(quizid, quizOwnerId, title, startime, players, rounds) {
    let quiz = {
        quizId : quizid,
        quizOwnerId : quizOwnerId,
        title: title,
        startTime : startime,
        players: players,
        roundes : rounds
    };
    let data = new dbContext.quizModel(quiz);
    data.save();
    return quiz;
}

async function getAllQuizzes(userId){
    return dbContext.quizModel.find().where({"players.id" : userId}).equals({"startTime" : Date.now().toLocaleString()});
}

async function getQuizByQuizId(quizId){
    return dbContext.quizModel.findOne({'quizId': quizId});
}

module.exports = {
    insertQuiz : insertQuiz,
    getQuizByQuizId : getQuizByQuizId
};


