module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        // Save the path so you go back to where u were after login. IMPORTANT 
        req.session.returnTo = req.originalUrl;
        // req.flash('error', 'You must be signed in.');
        return res.redirect('/login');
    }
    next();
}