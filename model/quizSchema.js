const db = require("../repositories/db.js");
const roundSchema = require("./roundSchema.js")
const playerSchema = require("./playerSchema.js")

const quizSchema = new db.schema({
    quizId : {type: Number, required: true},
    quizOwnerId : {type: Number, required: true},
    title: {type: String, required: true},
    startTime : {type: Date, required: true},
    players: [playerSchema],
    roundes : [roundSchema]
}, {collection: 'quizzes'})


module.exports = quizSchema;