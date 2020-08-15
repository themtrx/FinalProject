const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        require: true
    },
    avatar: {
        type: String,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    experience: {
        type: String,
        default: '0/100'
    },
    level: {
        type: String,
        default: 'Observer',
        enum: ['Observer',
                'Food Tester',
                'Food Critique',
                'Waiter/Waitress',
                'Junior Chef',
                'Station Chef',
                'Steff Chef',
                'Deputy Chef',
                'Head Chef',
                'Executive Chef']
    },
    ratedMeals: [{type: ObjectId, ref: 'Meal'}],
    reviewedMeals:[{type: ObjectId, ref: 'Meal'}],
    meals: [{type: ObjectId, ref: 'Meal'}]
});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model('User', userSchema);