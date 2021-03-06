const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')
const PORT = process.env.PORT || 5000;
app.use(cors())

require('./models/User')

require('./services/passport')

mongoose.connect(keys.mongoURI, ()=>{
    console.log('conneted to db')
})

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session())

require('./routes/addRoutes')(app);






app.listen(PORT, () => console.log('server listening on port  ' + PORT))