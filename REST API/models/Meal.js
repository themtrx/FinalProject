const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const mealSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    complexity: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    cookTime: {
        type: Number,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    ingredients: [{
        ingred: String,
        measureType: String,
        measure: Number
    }],
    preparation: [{
        type: String
    }],
    raiting: {
        type: Number,
        max: 5,
        default: 0
    },
    author: {
        type: ObjectId,
        ref: "User"
    },
    published: {
        type: Boolean,
        default: false
    }

});

module.exports = new Model('Meal', mealSchema);