const answerRepo = require("../repositories/answerRepository.js");

async function insertAnswerForQuestion(answer, questionId, userId){
    return await answerRepo.insertAnswerForQuestion(answer, questionId, userId)
}

module.exports = {
    insertAnswerForQuestion: insertAnswerForQuestion
}