const ApiError = require('./errors');

module.exports = (err, req, res, next) => {
    console.error(err.message);

    if (err instanceof ApiError) {
        return res.status(err.status).json({ status: false, msg: err.message, data: err.errors })
    }

    return res.status(500).json({ status: false, msg: 'Internal server error' })
};
