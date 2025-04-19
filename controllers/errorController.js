module.exports = (err, req, res, next) => {
  console.log(err.stack);
  // 1. create middleware
  // 2. create error
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
};
