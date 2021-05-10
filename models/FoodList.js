const mongoose = require('mongoose');

const FoodListSchema = new mongoose.Schema({
    food_name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    description: 'String',
    res_name: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Restaurant' 
      },
      
    },
    {
    timestamps: true
    })

const model = mongoose.model('FoodList',FoodListSchema);
module.exports = model;