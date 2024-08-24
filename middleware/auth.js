// middleware/auth.js
const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).send('Token inválido');
            }
            req.user = user;
            next();
        });
    } else {
        res.redirect('/usuarios/login');
    }
};

module.exports = verificarToken;
