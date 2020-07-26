class ErrorHandler extends Error {
  /**
     * @constructor
     * @param {number} statusCode - Error code
     * @param {string} message - The error message
     */
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (res, err) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred';
  res.status(statusCode).send({
    status: 'error',
    message
  });
};

module.exports = {
  ErrorHandler,
  handleError
};
