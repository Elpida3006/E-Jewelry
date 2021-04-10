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
router.get('/:category', (req, res, err) => {
    const curr = req.params.category
service.getCategory(curr)
.then(products => {
        
       
    res.send(products)
})
.catch(err => console.error(`No articles yet`))
})
router.get('/sortingData/:like', (req, res, err) => {
   const sortCriteria = req.params.like
   console.log(sortCriteria);
service.sortingData(sortCriteria)
.then(products => {
        
      console.log(products); 
    res.send(products)
})
.catch(err => console.error(`No articles yet`))
})

router.post('/create', (req, res, error) => {
//   const {nameProduct, price, imageUrl, description, brand, category, like} = {...req.body}
// console.log(object);
    // console.log(req.user._id);
    // service.createProduct(req.body)
    // service.createProduct(req.body, req.user._id)

    service.createProduct(req.body)
        // .then(() => {
        //     console.log(`Article is created`)
        // 
        // })
        .then(article => {
            // console.log(article);
            res.status(200).send(article)
        })
        .catch(err => console.log('wrong data - product is not created'));
        // .catch(error => { res.render('create', { error }); })
});
router.put('/edit/:id', (req, res) => {
    let articleId = req.params.id
    console.log(articleId);
     console.log(req.body);
    // let myID = req.user._id


    service.postEditProduct(articleId, req.body)
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

    service.deleteProduct(articleId)
        .then((article) => {
            // res.redirect('/products')
            res.status(200).send(article)
        })
        .catch(next)


});
router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
service.getId(req.params.id)
.then((article) => {
    console.log(req.params.id);
    console.log(article);
    // res.redirect('/products')
    res.status(200).send(article)
})
.catch(err => console.log('error again'));
});

router.get('/edit/:id', (req, res) => {
    let articleId = req.params.id

    service.getId(articleId)
        .then(article => {
            res.status(200).send(article)
        })
        .catch(error => {
            console.error(`Edit page not found`)
        });

})
router.get('/details/:id', (req, res, next) => {
    let articleId = req.params.id


    service.getId(articleId)
        .then(article => {
            // console.log(item);
            res.status(200).send(article)
        })
    .catch(error => {
        console.error(`details page not found`)
          
    });
});



router.get('/buy/:id', (req, res, error) => {
    let itemId = req.params.id;
 
    let userId = (req.user._id);
 console.log(`req.user._id. :${userId}`);
    service.buy(itemId, userId)
        .then(updatedItem => {
            res.status(200).send(updatedItem);

            console.log(`BUY Product`);
  
        })
        .catch(error => {
            console.error(`Do not buy a model`)
        })
})

router.get('/like/:id', (req, res, error) => {
    let itemId = req.params.id;
    console.log(itemId);
  
    service.likeFn(itemId)
        .then(updatedItem => {
           
            res.status(200).send(updatedItem);

            console.log(`LIKE Product`);
            console.log(updatedItem);
                   })
        .catch(error => {
            console.error(`Do not LIKE a model`)
        });
});

router.get('/getOneProductById/:id', (req, res, error) => {
    let itemId = req.params.id;
  
    
    service.getId(itemId)
        .then(article => {
            res.status(200).send(article)
        })
        .catch(error => {
            console.error(`ShoppingCard page not found`)
        }); 
});  
router.get('/delShopCard/:id',(req, res, next) =>{
    let articleId = req.params.id
    let userId = (req.user._id);
    service.delShopCard(articleId, userId)
        .then((article) => {
            // res.redirect('/products')
            res.status(200).send(article)
        })
        .catch(next)
} );
router.get('/buyOne/:id',(req, res, next) =>{
    let articleId = req.params.id
    let userId = (req.user._id);

    service.buyOne(articleId, userId)
        .then((article) => {
            // res.redirect('/products')
            res.status(200).send(article)
        })
        .catch(next)
} );

router.put('/buyAll',(req, res, next) =>{
 
    service.buyAll(userId)
        .then((article) => {
            // res.redirect('/products')
            res.status(200).send(article)
        })
        .catch(next)
} )


module.exports = router;