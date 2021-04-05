const { Router } = require('express');
const router = Router();
const userServise = require('../services/userServise');
const config = require('../config/config');
const isLogged = require('../middlewares/check-auth');

const { repeatPasswordCheck, isFullPassword, strongPassword } = require('../validators/userValidators')

// router.get('/register', isLogged(false), userServise.getRegister)

// router.get('/login', isLogged(false), userServise.getLogin)
router.get('/', userServise.getUser);
router.delete('/logout', userServise.getLogout);
// logout/delete
router.get('/profile', isLogged(true), userServise.getProfile);




// router.post('/register', isLogged(false), repeatPasswordCheck, userServise.postRegister)
    // repeatPasswordCheck, strongPassword, isFullPassword,
router.post('/register',  userServise.postRegister)

router.post('/login', isLogged(false), userServise.postLogin);
router.get('/checkToken', userServise.checkToken);







module.exports = router;