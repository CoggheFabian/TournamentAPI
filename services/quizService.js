const quizRepo = require("../repositories/quizRepository");


function insertQuiz(quizId, quizOwnerId, title, startime, players, rounds){
    return quizRepo.insertQuiz(quizId, quizOwnerId, title, startime, players, rounds);
}

async function getQuizByQuizId(quizId) {
    return await quizRepo.getQuizByQuizId(quizId);
}

module.exports = {
    insertQuiz : insertQuiz,
    getQuizByQuizId : getQuizByQuizId
};

