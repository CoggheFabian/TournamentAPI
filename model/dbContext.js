const db = require('./../repositories/db.js')
const quizSchema= require('./quizSchema.js');
const questionSchema = require('./questionSchema.js');
const playerSchema = require('./playerSchema.js');
const roundSchema = require('./roundSchema.js');

module.exports = {
    quizModel : db.mongoose.model("quiz", quizSchema),
    roundModel : db.mongoose.model("round", roundSchema),
    questionModel :  db.mongoose.model("question", questionSchema),
    playerModel : db.mongoose.model("player", playerSchema)
}
