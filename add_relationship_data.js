const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

// Fruit Schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please fill in the name field!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// People Schema
const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please fill in the name field!"]
    },
    age: {
        type: Number
    },
    favoritFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

// Add data
const Duku = new Fruit({
    name: "Duku",
    rating: 7,
    review: "Lumayan enak"
})

Duku.save(function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Berhasil menambah buah Duku")
    }
})

const Walid = new People({
    name: "walid",
    age: 19,
    favoritFruit: Duku
})

Walid.save(function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Berhasil menambah data Relationship!")
    }
})