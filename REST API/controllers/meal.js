const models = require('../models');

const levels = ['Junior Chef',
                'Station Chef',
                'Steff Chef',
                'Deputy Chef',
                'Head Chef',
                'Executive Chef']

module.exports = {
    get:{
        published : (req, res, next) => {
            models.Meal.find({"published":true}).populate('author', '_id username')
            .then((meals) => res.send(meals))
            .catch(next);
        },
        getUnpublished: (req, res, next) => {
        
            const userLevel = req.user.level
    
            models.Meal.find({"published":false}).populate('author', '_id username')
                .then((meals) => Promise.all([meals, userLevel]))
                .then(([meals, userLevel]) => {
                    if(!levels.includes(userLevel)){
                        res.status(401).send('Minimum level Junior Chef');
                        return;
                    }
    
                    res.send(meals)
                })
                .catch(next);
        }
    },
    post: (req, res, next) => {

        const {
            title,
            complexity,
            prepTime,
            cookTime,
            servings,
            category,
            ingredients,
            preparation,
        } = req.body;
        console.log(title);
        const { _id } = req.user;

        models.Meal.create({ 
            title,
            complexity,
            prepTime,
            cookTime,
            servings,
            category,
            ingredients,
            preparation,
            author: _id })
            .then((createdMeal) => {
                console.log(createdMeal);
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { meals: createdMeal } }),
                    models.Meal.findOne({ _id: createdMeal._id })
                ]);
            })
            .then(([modifiedObj, mealObj]) => {
                res.send(mealObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Meal.updateOne({ _id: id }, { description })
            .then((updatedMeal) => res.send(updatedMeal))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Meal.deleteOne({ _id: id })
            .then((removedMeal) => res.send(removedMeal))
            .catch(next)
    }
};