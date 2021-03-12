// module.exports = function isLogged(req, res, next) {


//     if (!req.user) {
//         return res.render('/user/login');
//     }
//     if (req.user) {
//         return res.render('/products');
//     }
//     next();
// }


module.exports = function isLogged(shouldBeAuthenticated) {
    //тук си сетваме правата дали да ни допуска като екшън

    return function(req, res, next) {
        console.log(req.user);
        const isNotAuthWhenAuthIsRequired =
            shouldBeAuthenticated && !req.user;
        if (
            (isNotAuthWhenAuthIsRequired) ||
            (!shouldBeAuthenticated && req.user)
        ) {
            res.redirect(isNotAuthWhenAuthIsRequired ? '/user/login' : '/products');
            return;
        }
        next();
    };
};