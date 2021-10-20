const express = require('express'),
  router = express.Router();

// get user lists
router.get('/list', function(req, res) {
  let sql = `SELECT * FROM users`;
  console.log("sqlget",sql);
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully",
      sql: sql
    })
  })
});

// create new user
router.post('/new', function(req, res) {
  let sql = `INSERT INTO users(login, name, password, email, phone) VALUES (?)`;
  let values = [
    req.body.login,
    req.body.name,
    req.body.password,
    req.body.email,
    req.body.phone
  ];
  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.redirect('/listado');
    // res.json({
    //   status: 200,
    //   message: "Usuario registrado satisfactoriamente"
    // })
  })
});

// delete user

// router.delete('/users/:userId', (req, res) => {
//   const userIndex = getUserIndex(req.params.userId)
 
//   if (userIndex === -1) return res.status(404).json({})
 
//   users.splice(userIndex, 1)
//   res.json(users)
//  })

router.delete('/delete/:login', function(req, res){
  let login = req.params.login;
  let sql = `DELETE FROM users WHERE login='`+req.params.login+`'`;
  console.log("sql", sql);

  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    
    res.json({
      status: 200,      
      message: "Usuario "+login+" eliminado satisfactoriamente"
    });
  });

  
});

module.exports = router;