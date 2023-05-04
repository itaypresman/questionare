module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(message, status = 500, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static badRequest(message = 'Bad request', errors = []) {
        return new ApiError(message, 400, errors);
    }

    static notFound(message = 'Not Found', errors = []) {
        return new ApiError(message, 404, errors);
    }
    static ServerError(message = 'Internal server error', errors = []) {
        return new ApiError(message, 500, errors);
    }
}
