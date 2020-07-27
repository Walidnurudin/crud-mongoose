const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({ // mongoose.Schema = untuk membuat skema file
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema); // mongoose.model(<nama collection>, skema)

// const apple = new Fruit({
//     name: "Apple",
//     rating: 8,
//     review: "Rasanya manis"
// });

// apple.save(function(error){ // save() = untuk memasukan ke database
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Berhasil simpan buah apel kedalam database")
//     }
// })

const Pisang = new Fruit({
    name: "Pisang",
    rating: 9,
    review: "buah kaya vitamin"
});

const Jeruk = new Fruit({
    name: "Jeruk",
    rating: 7,
    review: "Rasanya manis"
});

const Mangga = new Fruit({
    name: "Mangga",
    rating: 8,
    review: "Rasanya asam dan manis"
});

Fruit.insertMany([Pisang, Jeruk, Mangga], function (error) { // insertMany() = untuk memasukan banyak ke database
    if (error) {
        console.log(error)
    } else {
        mongoose.connection.close(); // untuk menutup koneksi mongo

        console.log("berhasil memasukan buah ke dalam database")
    }
})