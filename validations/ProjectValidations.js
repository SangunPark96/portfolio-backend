const validateProjectURL = (req, res, next) => {
    if (
      req.body.repo_link.substring(0, 7) === "http://" ||
      req.body.repo_link.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .json({ error: "You forgot to start your URL with http:// or https://" });
    }
  };
  
  module.exports = {
    validateProjectURL,
  };