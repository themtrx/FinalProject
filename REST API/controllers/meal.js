const models = require('../models');

module.exports = {
    get: (req, res, next) => {

        // const limit = req.query.count ? Number(req.query.count) : 20
        
        models.Meal.find({"published":true}).populate('author', '_id username')
            .then((meals) => res.send(meals))
            .catch(next);
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