const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt');
const passport = require('passport');

 function initialize(passport, getUserByEmail, getUserById) {
    //function to auth users
    const authenticateUser = async (email, password,done) => {
    // get users by their email
    const user = getUserByEmail(email);
    if (user == null) {
        return done(null,false,{message:'no user foud with that email address'})
    }
    try {
        if (await bcrypt.compare(password,user.password) ){
            return done(null,user);
        } else {
            return done(null,false,{message:'password mismatch'})
        }
    } catch (error) {
        console.log(error);
        return  done(error);
        
    }


    }
    passport.use(new LocalStrategy({usernameField:'email'}, authenticateUser))
    passport.serializeUser((user,done) => done(null, user.id) )
    passport.deserializeUser((id,done) =>{
        done(null,getUserById(id))
    })
}

module.exports = initialize
