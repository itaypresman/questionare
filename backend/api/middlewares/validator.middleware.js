const { validationResult } = require('express-validator');


module.exports = (req, res, next) => {
    try {
        validationResult(req).throw();
        next();
    } catch (e) {
        res.status(400).json(e.errors);
    }
};
