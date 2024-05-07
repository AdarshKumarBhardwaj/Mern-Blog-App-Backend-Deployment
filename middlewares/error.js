class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, resp, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  if (err.name === "CastError") {
    const message = `Invalid : Resources not found:${err.path}`;
    err = new ErrorHandler(message, 404);
  }

  return resp.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
