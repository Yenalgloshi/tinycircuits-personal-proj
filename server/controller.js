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
  },

  itemDetails: (req, res, next) => {
    const db = req.app.get('db');
    let id = parseInt(req.params.itemId);

    db.get_prod_item(id).then(item => { res.status(200).send(item)})
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },

  featuredProd: (req, res, next) => {
    const db = req.app.get('db');

    db.get_featured_prod().then(featured => { res.status(200).send(featured)})
    .catch( err => {
      console.log(err);
      res.status(500).send(err)
    })
  },

  cartAdd: (req, res, next) => { 
    let {itemID, qty} = req.body;
    req.session.cart.push({
       itemID,
       qty
    })
    res.sendStatus(200)
  },

  getCart: (req, res, next) => {
    // transfer quantity count from req.session.cart to detailed cart array
    function addQuantity(cart, detailedCart) {
      cart.forEach((el, i)=>{
        detailedCart[i].quantity = el.qty
      })
      return detailedCart
    }
    // get array of detailed items from DB based on req.session.cart
    function getDetailedItems(cart){
      const db = req.app.get('db');
      let promiseArray = []
      // loop through session cart, create array of promises
      // which will return the detailed item 
      for( let i=0; i < cart.length; i++){
        promiseArray.push(
          db.get_prod_item(+cart[i].itemID).then(item=>item[0])
        )  
      }
      // Promise.all takes array of promises and resolves with 
      // the array of resolved promises
      return Promise.all(promiseArray)
    }
    // Since this function returns a promise, .then is attached
    getDetailedItems(req.session.cart).then(result=>{
      // push that result through the addQuantity function
      // to give each item a quantity value
      result = addQuantity(req.session.cart, result)
      res.send(result)
    })
  }

}