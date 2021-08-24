const db = require("../repositories/db.js");
const questionSchema = require("./questionSchema.js")

const roundSchema = new db.schema({
    kindOfRound: String,
    questions : [questionSchema]
}, {collection: 'quizzes'})

module.exports = roundSchema;