const VALID_TOKEN = "secret-token";

exports.validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (token !== VALID_TOKEN) {
    return res.status(401).json({
      error: "Invalid token",
    });
  }

  next();
};
