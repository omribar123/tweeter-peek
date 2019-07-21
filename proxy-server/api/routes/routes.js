module.exports = (app) => {
    const authController = require('../controllers/authController');
    const followersController = require('../controllers/followersController');

    app.route('/token')
        .get(authController.getBearerToken);

    app.route('/followers/')
        .get(followersController.getFollowers);
};
