const homeurl = 'http://localhost:3002/api/products';

export const getProducts = (category = '') => {
    let productsCategory = homeurl + ((category && category !== 'all') ? `?category=${category}` : '');

  return fetch(productsCategory)
    .then(data => data.json())
    .catch(err => console.log(err));

};

export const getOne = (productId) => {
    return fetch(`${homeurl}/${productId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};