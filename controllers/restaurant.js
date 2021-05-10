const Restaurant = require('../models/Restaurant');

module.exports = {
    create : async (req, res) =>{
        const { res_name } = req.body;
        const restaurant = await Restaurant.create({
            res_name
        })
        return res.send(restaurant)
    },

    find : async (req, res) => {
        const restaurant = await Restaurant.find() 
        return res.send(restaurant)
    },
    poductByRestaurant: async (req, res) => {
       const  {id} = req.params;
       const restaurant = await Restaurant.findById(id).populate('food_list');
        res.send(restaurant.food_list);
    },

    Restaurant: async (req,res) => {
        const FoodListID = req.query; 
        const Id= await Restaurant.findOne(FoodListID);
        return res.send(Id);
    },
    removeCat: async (req,res)=>
    {
        const id = req.params.id;
        const Document = Restaurant.findById(id);
        const catDelet =await Restaurant.remove(
            Document
          )
            .then(catDelet => {res.send("deleted successfully")})
            .catch(error => console.error(error))
    },
    updateRestaurant: async (req,res)=>
    {
        const id = req.params.id;
        const updateDoc =await Restaurant.findOneAndUpdate({_id:id},{res_name:"abcdef"},{new:true}).
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
