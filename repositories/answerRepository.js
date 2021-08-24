const dbContext = require("../model/dbContext")
const mongoose = require("mongoose")
const ObjectId = require('mongoose').Types.ObjectId;


async function insertAnswerForQuestion(answer, questionId, userId){
   let id = mongoose.Types.ObjectId('6124c4de18dd1b0c8c37d871');
    return dbContext.questionModel.find({"_id": id}).then((question) =>   {
        console.log(question);
        return question;
    })
}

module.exports = {
    insertAnswerForQuestion: insertAnswerForQuestion
}

