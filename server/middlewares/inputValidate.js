const alert = require('alert');

function validateInput(req, res, next) {

    let isValid = true;


    if (req.body.name.length == 0) {
        isValid = false;
        alert(`missing name`)
    } else if (req.body.description.trim().length < 10) {
        isValid = false;
        alert(`missing description`)
    } else if (!req.body.imageUrl) {
        isValid = false;
        alert(`missing image file`)
    }

    if (isValid) {
        next();
    }

}
module.exports = {
    validateInput,

}