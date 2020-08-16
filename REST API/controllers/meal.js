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
        
            // const userLevel = req.user.level
    
            // models.Meal.find({"published":false}).populate('author', '_id username')
            //     .then((meals) => Promise.all([meals, userLevel]))
            //     .then(([meals, userLevel]) => {
            //         if(!levels.includes(userLevel)){
            //             res.status(401).send('Minimum level Junior Chef');
            //             return;
            //         }
    
            //         res.send(meals)
            //     })
            //     .catch(next);

             models.Meal.find({"published":false}).populate('author', '_id username')
                .then((meals) => {
                    res.send(meals)
                })
                .catch(next);
        },
        currentMeal: (req, res, next) => {

            const id = req.params.id;
            models.Meal.findById(id).populate('author').lean()
                .then((meal) => {
                    res.send(meal)
                })
                .catch(next)
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
            preparation,
            imgUrl
        } = req.body;
        const { _id } = req.user;

        models.Meal.create({ 
            title,
            complexity,
            prepTime,
            cookTime,
            servings,
            category,
            preparation,
            imgUrl,
            author: _id })
            .then((createdMeal) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { meals: createdMeal } }),
                    models.Meal.findOne({ _id: createdMeal._id })
                ]);
            })
            .then(([modifiedObj, mealObj]) => {
                res.send(mealObj);
            })
            .catch((err) => {
                res.send(err)
            });
    },

    put: (req, res, next) => {
        const id = req.params.id
        const { published } = req.body;
        models.Meal.updateOne({ _id: id }, { published })
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