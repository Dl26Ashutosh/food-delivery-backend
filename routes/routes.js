const express = require('express');
const router = express.Router(); 
// JWT Generation route for login  controller
const Login = require('../controllers/auth');
const authencticationMiddleware = require('../middleware/authMiddleware');
// Import of restaurant and food list
const Restaurant = require('../controllers/restaurant');
const FoodList  = require('../controllers/foodlist');
router.get('/',(req,res)=>res.send('ok'));
//  Import of Registration and User List
const Users = require('../controllers/registration');
// Restaurant routes
router.post('/Restaurant/create',Restaurant.create);
router.get('/Restaurant/find',Restaurant.find);
router.get('/Restaurant/find/:id',Restaurant.Restaurant);
router.get('/Restaurant/find/FoodLists/:id', Restaurant.poductByRestaurant);
// update and delete route for restaurant
router.delete('/Restaurant/delete/:id',Restaurant.removeCat);
router.put('/Restaurant/update/:id',Restaurant.updateRestaurant);
// FoodList routes
router.post('/FoodList/create/:id', FoodList.create);
router.get('/FoodList/populate/:id',FoodList.RestaurantByFoodList);
// food list delete routes hrough postman
router.delete('/FoodList/delete/:id',FoodList.delFoodList);
// Food list update routes through postman
router.put('/FoodList/update/:id',FoodList.updateDoc)
router.get('/FoodList/find',FoodList.find)

// Authentication routes
router.get('/users', Users.findUser);
router.get('/users/:id', Users.userById);
router.post('/register', Users.register);
// login route
router.post('/login', Login.login);
// protected route
router.get('/protected',authencticationMiddleware.protected, (req,res) => {
    res.send({message: true});
})
module.exports = router;