const passport = require('passport')



module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
    scope:['profile', 'email']
    }))

    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/profile');
    });


    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    })

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.post('/normal/login', (req, res) => {
        const data = req.body;
        const userData = userService(data);
        if(userData !== null){
            res.send(200, userData);
        }
        else{
            res.send(404, "error");
        }
    })

}


