const FoodList = require('../models/FoodList');
const Restaurant = require('../models/Restaurant');

module.exports = {
    create : async (req, res) => {

        console.log(req.params);
        restaurant = req.params;
        Id = restaurant.id;
        const { food_name, price ,description} = req.body;
        const foodList = await FoodList.create({
            food_name,
            price,
            description,
            res_name:Id
        });
        await foodList.save();

        const RestaurantById = await Restaurant.findById(Id);

        RestaurantById.food_list.push(foodList);
        await RestaurantById.save();

        return res.send(RestaurantById);
    },

    find : async (req, res) => {
        const foodList = await FoodList.find()
        return res.send(foodList)
    },

    

    RestaurantByFoodList : async (req,res)=>{
        const { id } = req.params;
        const RestaurantByFoodList = await FoodList.findById(id).populate('res_name');
        res.send(RestaurantByFoodList);
    },

    delFoodList: async (req,res)=>
    {
        const id = req.params.id;
        const Document =FoodList.findById(id);
        const catDelet =await FoodList.remove(
            Document
          )
            .then(catDelet => {res.send("deleted successfully")})
            .catch(error => console.error(error))
    },
    updateDoc:async (req,res)=>
    {
        const id = req.params.id;
        const updateDoc =await FoodList.findOneAndUpdate({_id:id},{food_name:"Computers"},{new:true}).
        then(
            (updateDoc=>{
                res.send("Document Update Successfully");
            })
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
}