const { Router } = require('express');
const router = Router();
const userServise = require('../services/userServise');
const config = require('../config/config');
const isLogged = require('../middlewares/check-auth');

const { repeatPasswordCheck, isFullPassword, strongPassword } = require('../validators/userValidators')

router.get('/register', isLogged(false), userServise.getRegister)

router.get('/login', isLogged(false), userServise.getLogin)

router.get('/logout', isLogged(true), userServise.getLogout)
router.get('/profile', isLogged(true), userServise.getProfile)




router.post('/register', isLogged(false), repeatPasswordCheck, userServise.postRegister)
    // repeatPasswordCheck, strongPassword, isFullPassword,
router.post('/login', isLogged(false), userServise.postLogin)








module.exports = router;