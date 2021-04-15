const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true , useUnifiedTopology: true });

const itemsModel = require("../model/items");

const Model = mongoose.model;
const Item = Model('Items',itemsModel);

// Display list of all items.
exports.getAllItems = async (req, res) => {
    console.log('All Items fetched');
    let data = await Item.find();
    console.log(data);
    res.status(200).send({success:true,data:data});
};

// Add an item
exports.addItem = async (req, res) => {
    const { title , price , description , discount , category } = req.body;
    console.log('Item added',title);
    const newItem = new Item({
        title:title,
        price:price,
        description:description,
        discount:discount,
        category:category
    });

    newItem.save((err,result)=>{
        if(err) console.log(err)
        console.log(result);
        res.status(200).send({success:true,response:"Data saved successfully"});
    })
};

exports.getItemByCategory = async (req, res) => {
    const { category } = req.query;
    console.log(category)
    let data = await Item.find({ category: category }).exec();
    res.status(200).send({success:true,data:data});
}

exports.fetchSlug = async (req,res) => {
    console.log(req.query);
}