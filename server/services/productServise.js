const Product = require('../models/Product')
    // const {  } = require('../validators/productValidator')
const User = require('../models/User')

// function createProduct(data, _id) {
    function createProduct(data) {
        // console.log({...data});
// const {nameProduct, price, imageUrl, description, brand, category, like } = {...data}
    //validation
    // console.log({...data, createdBy: _id });
     _id = 000;
    const createdAt = new Date();
    // console.log({...data, createdAt});
    return Product.create({...data, createdAt, createdBy: _id })
    // return Product.create({...data, createdAt})

}

function getAll() {
    // const userId = req.user._id
    // console.log(userId);
    // return new Promise((resolve, reject) => {
    //         let products = Product.find().populate('createdBy')
    //             // .sort({ creationDate: -1 })


    //         resolve(products)
    //     })
    //    .catch(err => { console.log(`unlisted`) })
return Product.find().populate('createdBy')
}
function getCategory(currcategory) {
    return Product.find({category: currcategory})
}
function sortingData(sortCriteria) {
  return sortCriteria === 'z-a' ? Product.find().sort({ like: -1 }) : Product.find().sort({ like: 1 })

}

function getId(id) {
    return Product.findById({ _id: id });
}

function deleteProduct(id) {

    return Product.deleteOne({ _id: id })
}

function postEditProduct(id, data) {
    console.log(data);
    return Product.updateOne({ _id: id }, {...data });

}

function buy(itemId, userId) {
    console.log(itemId);
    const id = userId
    console.log(`its a fetch ${id}`);
    return Promise.all([
        Product.updateOne({ _id: itemId }, { $inc: { 'buyers': 1 } }),
        User.updateOne({ _id: userId }, { $push: { offersBought: itemId } })
    ])
}

function likeFn(itemId) {
  
     return Product.updateOne({ _id: itemId }, { $inc: { 'like': 1} });
   
}
function delShopCard(itemId, userId) {
    console.log(itemId);
    const id = userId
    console.log(`its a fetch ${id}`);
    return Promise.all([
        Product.updateOne({ _id: itemId }, { $inc: { 'buyers': -1 } }),
        User.updateOne({ _id: userId }, { $pull: { offersBought: itemId }} )
    ])
}

function buyOne(itemId, userId) {
    console.log(`itemid ${itemId}`);
    const id = userId
    // console.log(`its a fetch ${id}`);
    return  User.updateOne({ _id: userId }, { $pull: { offersBought: itemId }} )
       
   
}

function buyAll(userId) {
    return   User.findOneAndUpdate({ _id: userId }, { $set: { offersBought: [] }} )
   
    
}

module.exports = {
    getCategory,
    sortingData,
    createProduct,
    getAll,
    getId,
    deleteProduct,
    postEditProduct,
    buy,
    likeFn,
    delShopCard,
    buyAll,
    buyOne

}