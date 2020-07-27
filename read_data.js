const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

Fruit.find(function(error, fruit){ // Find() = untuk membaca data
    if(error){
        console.log(error);
    }else{
        mongoose.connection.close();

        fruit.forEach(fruit => {
            console.log(fruit.name)
        });
    }
})