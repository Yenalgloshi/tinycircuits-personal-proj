module.exports = {
  signIn: (req, res, next) => {
    req.app.get('db').user_login(req.body.email, req.body.password).then( loginResults => {
      if(loginResults[0]) {  // check to see if username exists
        req.session.userId = loginResults[0].userid;  // this sets the userid onto the session obj
        res.status(200).send('Login successful');
      } else {
          return res.status(403).send('User not found. Access denied');
        }
    })
  }
}