
//check if user is logged in
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        //control statement
        //if user is not logged in then direct user to login page
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
