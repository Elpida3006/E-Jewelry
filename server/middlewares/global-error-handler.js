const errorHandler = (err, req, res, next) => {
    // let status = err.status || 500;
    // let message = err.message || 'Somenthing went wrong'

    //add 404 page

    res.render('404')
}

module.exports = errorHandler