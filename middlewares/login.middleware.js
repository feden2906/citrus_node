const User = require('../database/User');

module.exports = {
    createLoginMiddleware: async (req, res, next) => {
        try {
            const username = req.body.name;
            const email = req.body.email;
            const password = req.body.password;

            const loginInfo = await User.findOne({username, email, password});

            if (!loginInfo) {
                throw new Error('Incorrect login or password');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
}