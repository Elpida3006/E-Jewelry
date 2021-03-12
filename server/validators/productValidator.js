// const validateName = name => {
//     const minLength = 4;

//     if(name.length < minLength) {
//         throw { message: `article name must be at least ${minLength} chars long!`}
//     }

//     return name;
// };

// const validateArticle= article => {
//     const minLength = 3;

//     if(article.length < minLength) {
//         throw { message: `article name must be at least ${minLength} chars long!`}
//     }

//     return article;
// };

// const validateOther = other => {
//     const min = 1;
//     const max = 100;

//     const regEx = /^\d+$/;

//     if(!regEx.test(other)) {
//         throw { message: ' other field must be a number!' };
//     }

//     const otherNum = Number(other);

//     if(otherNum < min || otherNum > max) {
//         throw { message: `otherNum field must be a number between ${min} and ${max}!`}
//     }

//     return otherNum;
// };

// const validateUrl = url => {
//     const regEx = /^https|http/;
//     if(!regEx.test(url)) {
//         throw { message: 'Image URL must start with either http or https!'}
//     }

//     return url;
// };

// module.exports = {
//     validateName,
//     validateArticle,
//     validateOther,
//     validateUrl
// }