const validateInterestURL = (req, res, next) => {
    if (
      req.body.img_link.substring(0, 7) === "http://" ||
      req.body.img_link.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .json({ error: "You forgot to start your URL with http:// or https://" });
    }
  };
  
  module.exports = {
    validateInterestURL,
  };