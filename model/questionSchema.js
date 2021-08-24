const db = require("../repositories/db.js");

const questionSchema = new db.schema({
    photoUrl : String,
    videoUrl : String,
    question: String,
    givenAnswer:[{"playerId": Number, "answer":String}]
}, {collection: 'quizzes'})

module.exports = questionSchema;