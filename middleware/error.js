const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // log to console for dev
  console.log(err);

  // mongoose bad objectid
  if (err.name === 'CastError') {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate fields value entered';
    error = new ErrorResponse(message, 400);
  }

  // mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ sucess: false, error: error.message || 'Server Error' });
};

module.exports = errorHandler;
