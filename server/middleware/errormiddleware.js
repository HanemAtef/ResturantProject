const errormiddleware = (err, req, res, next) => {
  console.error(err);

  // Handle AppError (operational errors)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      msg: err.message,
    });
  }

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({ msg: err.message });
  }

  // Handle invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({ msg: "Invalid ID format" });
  }

  // Default server error
  res.status(500).json({ msg: "Server Error" });
};

module.exports = errormiddleware;
