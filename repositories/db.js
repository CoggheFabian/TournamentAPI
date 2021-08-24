const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/quiz?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {useNewUrlParser : true})
let schema = mongoose.Schema;

module.exports = {
    mongoose : mongoose,
    schema : schema
};