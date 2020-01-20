const passport = require('passport');
import {knexClient} from "./initDB";

module.exports = () => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        console.log(id, done, 'wow');
        knexClient('account')
            .where({id}).first()
            .then((user) => { done(null, user); })
            .catch((err) => { done(err,null); });
    });

};