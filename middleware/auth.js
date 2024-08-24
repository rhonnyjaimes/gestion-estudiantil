const jwt = require('jsonwebtoken');

function verificarAutenticacion(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/usuarios/login');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.redirect('/usuarios/login');
        }
        req.usuario = decoded;
        next();
    });
}

module.exports = verificarAutenticacion;
