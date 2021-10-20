import ErrorHandelar from "../utils/errorhandler.js";

const Error = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";
  // Wrong  MOngodb  Cast Error
  if (err.name == "CastError") {
    const message = `Resource not found.Invalid1${err.path}`;
    err = new ErrorHandelar(message,400)
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
export { Error };
