import passport from 'passport';
import * as dotenv from 'dotenv';
import {BasicStrategy} from 'passport-http';
import {Strategy as JwtStrategy, ExtractJwt} from 'passport-jwt';
import {UserService} from '../services/user.service';

dotenv.config();


passport.use(new BasicStrategy((username, password, done) => {
    UserService.getByUsername(username).then(user => {
        if (UserService.hasValidPassword(user, password)) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    }).catch(_ => done(null, false));
}));


passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
}, (jwtPayload, done) => {
    UserService.getById(jwtPayload.userId)
        .then(user => done(null, user))
        .catch(_ => done(null, false));
}));
