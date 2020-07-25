module.exports = (req, res, next) => {
  try {
    if (!req.session.auth) {
      req.flash('error', 'Login to continue');
      res.redirect('/login');
    } else {
      next();
    }
  } catch (e) {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};
