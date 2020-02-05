const passport = require('../../init/local');
import { createUser } from "../../shared/utils/authHelper";

export const checkAuth = async (req, res) => {};

export const registerAccount = async (req, res, next) => {
    try {
        return createUser(req, res, next)
            .then((response) => {
                passport.authenticate('local', (err, user, info) => {
                    if (user) { handleResponse(res, 200, 'success'); }
                })(req, res, next);
            })
            .catch((err) => {
                console.log(err);
                handleResponse(res, 500, 'error');
            });
    } catch (e) {
        console.log(e);
    }
};

export const loginAccount = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { handleResponse(res, 500, 'error'); }
        if (!user) { handleResponse(res, 404, 'User not found'); }
        if (user) {
            req.logIn(user, (error) => {
                console.log(res);
                if (error) handleResponse(res, 500, 'error');
                handleResponse(res, 200, 'success');
            });
        }
    })(req, res, next);
};

export const logoutAccount = async (req, res) => {};

const handleResponse = (res, code, statusMsg) => {
    res.status(code).json({status: statusMsg});
};