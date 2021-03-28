const homeurl = 'http://localhost:3002/api/products';

export const getProducts = (category = '') => {
    let productsCategory = homeurl + '/' + ((category && category !== 'All') ? `${category}` : '');
    console.log(category);
console.log(productsCategory);
  return fetch(productsCategory)
    .then(res => res.json())
    .catch(err => console.log(err));

};
export const getAll = () => {
     return fetch(homeurl)
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const getName = (nameProduct = '') => {
    let productsName = homeurl + '/' + ((nameProduct && nameProduct !== 'All') ? `${nameProduct}` : '');
    console.log(nameProduct);
console.log(productsName);
  return fetch(productsName)
    .then(res => res.json())
    .catch(err => console.log(err));

};

export const getOne = (productId) => {
    return fetch(`${homeurl}/${productId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};



export const createProduct = (nameProduct, price, imageUrl, description, brand, category, like) => {


   let product = {nameProduct, price, imageUrl, description, brand, category, like};
    return fetch(`${homeurl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    })
        .then(product => {
            console.log('you are created');        
console.log(product);
            // product.json();
        })
        .catch(error => console.log('error fetch'));
};
export const editProduct = (nameProduct, price, imageUrl, description, brand, category, like) => {
    let product = {nameProduct, price, imageUrl, description, brand, category, like};

    return fetch(`${homeurl}/edit/:id`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    })
        .then(product => console.log('edited'))
        .catch(error => console.log('error fetch'));
};
export const deleteProduct = (productId) => {
    return fetch(`${homeurl}/delete/${productId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productId)
    })
        .then(product =>  console.log('Deleted'))
        .catch(error => console.log('error fetch'));
};

