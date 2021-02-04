const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: {type: String, required: [true, 'Pole Tytuł jest wymagane']}, // String is shorthand for {type: String}
    description: {type: String, required: [true, 'Pole Opis jest wymagane']},
    created: { type: Date, default: Date.now },

});

module.exports = mongoose.model('News', newsSchema)

// const News = mongoose.model('News', {
//     title: {type: String, required: true},
//     description: {type: String, required: true},
//     created: { type: Date, default: Date.now }
// });

// module.exports = News;