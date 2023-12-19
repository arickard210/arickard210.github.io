const express = require('express');
const port = 3000;
const app = express();
const mongoose = require('mongoose');

// Resume from here with updating the menuItems_fake to continue the mongoDB practice
// started project on 1-14-23

const menuItems_fake = [
    {
        title: 'Big Burger',
        description: '100% Wagyu beef patt, romaine lettuce, juicy tomato, Wisconsin mild cheddar cheese, ketchup, and mustard',
        price: 10.99,
        image: './resources/wagyu-cheeseburger.jpg'
    },
    {
        title: 'The Grand Veggie',
        description: 'Premium Seasoned Beyond Burger patty, with all the fixings',
        price: ,
        image: 
    },
    {
        title: ,
        description: ,
        price: ,
        image: 
    },
    {
        title: ,
        description: ,
        price: ,
        image: 
    },
    {
        title: ,
        description: ,
        price: ,
        image: 
    }
]


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect('mongodb://localhost/myDatabase', 
{useNewUrlParser: true});

const menuSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    image: String
});

const Menu = mongoose.model('Menu', menuSchema);

