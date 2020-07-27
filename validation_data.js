const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

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

const Sirsak = new Fruit({
    name: "Sirsak",
    rating: 8,
    review: "Seger"
})

Sirsak.save(function(error){
    if(error){
        console.log(error, "Mohon cek kembali!")
    }else{
        console.log("Berhasil menambah data!")
    }
})