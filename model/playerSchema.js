const db = require("../repositories/db.js");

const playerSchema = new db.schema({
    id : Number,
    name : String
}, {collection: 'quizzes'})

module.exports = playerSchema;