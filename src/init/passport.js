const passport = require('passport');
import {knexClient} from "./initDB";

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((id, done) => {
        knexClient('account')
            .where({id}).first()
            .then((user) => { done(null, user); })
            .catch((err) => { done(err,null); });
    });

};