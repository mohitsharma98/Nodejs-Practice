var Product = new require('../models/product');
var mongoose = new require('mongoose');

try{

}catch(err){

}
mongoose.connect('mongodb://127.0.0.1:27017/shopping', {useNewUrlParser: true});

var products = [
    new Product({
        imagePath: 'images/Bakery delivery.jpg',
        title: 'Hello World!',
        description: 'Its an amazing day',
        price: 10,
    }),
    new Product({
        imagePath: 'images/medicinedelivery.jpg',
        title: 'Hello Medicines!',
        description: 'Its an aweful day',
        price: 15,
    }),
    new Product({
        imagePath: 'images/grocerydelivery.jpg',
        title: 'It Sucks!',
        description: 'Are you kidding?',
        price: 18,
    }),
    new Product({
        imagePath: 'images/Bakery delivery.jpg',
        title: 'Hello People!',
        description: 'What the hell!?',
        price: 16,
    })
];

var done = 0;
for(var i=0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}