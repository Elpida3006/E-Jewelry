const homeurl = 'http://localhost:3002/api/products/';

export const getProducts = (category = '') => {
    let productsCategory = homeurl + ((category && category !== 'all') ? `${category}` : '');
    console.log(category);
console.log(productsCategory);
  return fetch(productsCategory)
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
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(product)
    })
        .then(product => product.json())
        .catch(error => console.log(error));
};
export const editProduct = (nameProduct, price, imageUrl, description, brand, category, like) => {
    let product = {nameProduct, price, imageUrl, description, brand, category, like};

    return fetch(`${homeurl}/edit`, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(product)
    })
        .then(product => product.json())
        .catch(error => console.log(error));
};
export const deleteProduct = (productId) => {
    return fetch(`${homeurl}/delete/${productId}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(productId)
    })
        .then(product => product.json())
        .catch(error => console.log(error));
};

