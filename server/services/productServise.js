const Article = require('../models/Article')
    // const {  } = require('../validators/productValidator')
const User = require('../models/User')

function createArticle(data, _id) {
    //validation
    // const { title, description } = {...data }
    console.log({...data, createdBy: _id });
    const createdAt = new Date();
    return Article.create({...data, createdAt, createdBy: _id })
}

function getAllArticles() {
    // const userId = req.user._id
    // console.log(userId);
    return new Promise((resolve, reject) => {
            let articles = Article.find().lean()
                // .sort({ creationDate: -1 })


            resolve(articles)
        })
        .catch(err => { console.log(`unlisted`) })

}


function getId(id) {
    return Article.findById(id).lean();
}

function deleteArticle(id) {

    return Article.deleteOne({ _id: id })
}

function postEditArticle(id, data) {
    console.log(data);
    return Article.updateOne({ _id: id }, {...data });

}

function buy(itemId, userId) {
    // console.log(itemId);
    // console.log(userId);
    return Promise.all([
        Article.updateOne({ _id: itemId }, { $push: { buyers: userId } }),
        User.updateOne({ _id: userId }, { $push: { offersBought: itemId } })
    ])
}


module.exports = {
    createArticle,
    getAllArticles,
    getId,
    deleteArticle,
    postEditArticle,
    buy

}