const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    res_name: 'string',
    food_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodList' }]
},
{
    timestamps: true
}
)


const model = mongoose.model('Restaurant',RestaurantSchema);

module.exports = model;