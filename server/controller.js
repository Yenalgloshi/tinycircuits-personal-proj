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

    db.get_prod_item(id).then(items => 
      { let newItem = items[0];
        newItem.imgsArr = items.map((pics) => {
          return pics.img_url;
        }) 
        res.status(200).send(newItem)})
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
  },

  
  checkForUser: (req, res, next) => {
    const db = req.app.get('db');

    db.get_users(req.body.email).then( (userRes) => {
      if(userRes[0]) {
        res.status(200).send(userRes[0])
      } else {
        db.add_user_email(req.body.email).then(userInfo => {
          console.log('registration results', userInfo);
          req.session.userId = userInfo[0].user_id;
          res.status(200).send(userInfo[0]);            
        }).catch(err => {
          console.log(err)
          res.status(500).send(err)
        })
      }
    })
  },

  addNewUserInfo: (req, res, next) => {
    const db = req.app.get('db');
    console.log(req.body)
    db.update_user_info([req.body.first_name,
                        req.body.last_name,
                        req.body.company,
                        req.body.address,
                        req.body.city,
                        req.body.state,
                        req.body.zip,
                        req.body.phone,
                        req.body.email])
    .then(user => { res.status(200).send(user)})
    .catch(err => {
      console.log(err);
      res.status(500).send(err)
    })
  },

  cartDelete: (req, res, next) => {
    let {itemID} = req.params;
    let cartItem = req.session.cart.find((item)=>{
      console.log('item id', itemID)
      return item.itemID === itemID
    })
    console.log(cartItem)
    if (cartItem.qty === 1){
      let arrIndex = req.session.cart.findIndex((item) => {
        return item.iemID === itemID
      })
      req.session.cart.splice(arrIndex, 1)
    }
    else{
      --cartItem.qty
    }
    // res.send(req.session.cart)
    next()
  }


}

