const { Router } = require('express');
const router = Router();
const service = require('../services/productServise');


router.get('/', (req, res, err) => {
    // const userId = req.user._id
    // console.log(userId);
// console.log(`No articles yet`);
    service.getAll()
        .then(products => {
      
            res.send(products)
        })
        .catch(err => console.error(`No articles yet`))
    
        
});

router.post('/create', (req, res, error) => {
    // console.log(req.body);
    // console.log(req.user._id);
    // service.createProduct(req.body)
    service.createProduct(req.body, req.user._id)
        // .then(() => {
        //     console.log(`Article is created`)
        //     res.redirect('/products')
        // })
        .then(article => {
            // console.log(item);
            res.status(200).send(article)
        })
        .catch(err => console.error)
        // .catch(error => { res.render('create', { error }); })
});
router.post('/edit/:id', (req, res) => {
    let articleId = req.params.id
    console.log(articleId);
    let myID = req.user._id


    service.postEditArticle(articleId, req.body)
        // .then(() => {
        .then(updatedItem => {
            res.status(200).send(updatedItem);
            console.log(`UPDATED`);
            // res.redirect(`/products`)
        })
        .catch(error => console.error(`Edit  not found`));


})
router.get('/delete/:id', (req, res, next) => {
    let articleId = req.params.id

    service.deleteArticle(articleId)
        .then((article) => {
            // res.redirect('/products')
            res.status(200).send(article)
        })
        .catch(next)


});

// router.get('/details/:id', (req, res, next) => {
//     let articleId = req.params.id


//     // console.log(articleId);
//     // console.log(myID);
//     let isCreator = false;
//     let myID;
//     let isBuyer = false;

//     service.getId(articleId)
//         .then(article => {
//             // console.log(item);
//             res.status(200).send(article)
//         })
//         // .then(article => {
//         //     let creatotId = article.createdBy.toString();
//         //     if (req.user) {
//         //         myID = req.user._id.toString()
//         //     }

//     //     // console.log(creatotId);
//     //     if (myID) {
//     //         if (creatotId == myID) {
//     //             isCreator = true;
//     //             console.log(`YOU ARE CREATOR`);
//     //         } else {
//     //             isCreator = false;

//     //         }
//     //     } else {
//     //         isCreator = false;
//     //     }
//     //     article.buyers = article.buyers.map(x =>
//     //         x.toString());

//     //     if (article.buyers.includes(myID)) {
//     //         isBuyer = true;
//     //         console.log(`YOU ARE BUYER THIS MODEL`);
//     //     }

//     //     res.render('details', { article, isCreator, isBuyer })
//     // })
//     .catch(next)
// });


// router.get('/edit/:id', (req, res) => {
//     let articleId = req.params.id

//     service.getId(articleId)
//         .then(article => {
//             res.status(200).send(article)
//                 // res.render('edit', { article })
//         })
//         .catch(error => {
//             console.error(`Edit page not found`)
//                 // res.redirect('/products')
//         });

// })

// router.get('/buy/:id', (req, res, error) => {
//     let itemId = req.params.id;
//     // console.log(itemId);
//     // console.log(req.user._id.toString());
//     let userId = req.user._id.toString();


//     service.buy(itemId, userId)
//         // .then(() => {
//         .then(updatedItem => {
//             res.status(200).send(updatedItem);

//             console.log(`BUY Product`);
//             // res.redirect('/products');
//         })
//         .catch(error => {
//             console.error(`Do not buy a model`)
//         })
// })

module.exports = router;