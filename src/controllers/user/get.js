const User = require('../../models/user');

export const getUsers = async (req, res) => {
    try {
        const users = await User.query();
        return res.json(users);
    } catch(e) {
        console.log('ERR:', e);
    }
};

export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const userById = await User.query()
            .findById(userId);
        if (userById) {
            return res.json(userById);
        } else {
            return res.status(404)
                .send({ message: `user - "${userId}" doesn't exists`});
        }
    } catch(e) {
        console.log('ERR:', e);
    }
};