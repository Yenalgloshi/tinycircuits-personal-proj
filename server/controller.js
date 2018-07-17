module.exports = {
  signIn: (req, res, next) => {
    const db = req.app.get('db');

    db.user_login(req.body.email, req.body.password).then( loginResults => {
      if(loginResults[0]) {  // check to see if username exists
        req.session.userId = loginResults[0].user_id;  // this sets the userid onto the session obj
        res.status(200).send('Login successful');
      } else {
          return res.status(403).send('Access denied');
        }
    })
  },

  regUser: (req, res, next) => {
    const db = req.app.get('db');

    db.get_users(req.body.email).then( (emailRes) => {
      if(emailRes[0]) {
        res.status(403).send('The email entered already exists. Please try a different email.')
      } else {
        db.user_reg(req.body.firstName, 
                    req.body.lastName, 
                    req.body.email, 
                    req.body.password).then(regRes => {
          console.log('registration results', regRes);
          
          req.session.userId = regRes[0].user_id;
          res.status(403).send('Registration successful!');            
        }).catch(err => {
          console.log(err)
          res.status(500).send(err)
        })
      }
    })
  },  

  prodList: (req, res, next) => {
    const db = req.app.get('db');

    db.get_prod_list().then(product => { res.status(200).send(product)})
    .catch( err => {
      console.log(err);
      res.status(500).send(err)
    })
  }



}