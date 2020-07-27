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

// Update data
// Fruit.updateOne({_id: "5f1b70da4733321ed0a772ed"}, {name: "Keboo"}, function(error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Berhasil mengupdate data!")
//     }
// });

// Delete data
Fruit.deleteOne({name: "Keboo"}, function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Berhasil menghapus data!")
    }
});

// menampilkan data
Fruit.find(function(error, fruit){
    if(error){
        console.log(error)
    }else{
        fruit.forEach(item => {
            console.log(item.name)
        })
    }
})