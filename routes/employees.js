const Employee = require('../models/Employee.js');

module.exports = function(app) {
  app.get('/employee/:id', function(req, res) {
    Employee.find({ employeeid: req.params.id }, function(err, data) {
      if (err) {
        console.log("Employee couldn't be found " + err);
        res.json(err);
      } else {
        res.json(data);
      }
    });
  });

  app.post('/employee', function(req, res) {
        Employee.find({ employeeId: req.body.employeeId }, function(err, data) {
          if (err) {
            console.log(err);
            return res.json({ error: err });
          }
          if (data.length) {
            // employee returned from database
            return res.json({ employee: data[0] });
          }

          // employee not in database, so add new employee
          const newEmployee = new Employee({
            employeeId: req.body.employeeId,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            imageLink: req.body.imageLink,
            position: req.body.position,
            miniBio: req.body.miniBio,
            iconTypeName: req.body.iconTypeName,
            funFact: req.body.funFact,
            fullBio: req.body.fullBio,
          });
          newEmployee.save(function(err, data) {
            if (err) {
              console.log("Employee couldn't be added: " + err);
              return res.json({ error: err });
            }
            console.log(data);
            return res.json({ employee: data });
          });
        })
      .catch(err => {
        res.json({ error: err });
      });
  });

  // app.put('/employee/genres/:id', function(req, res) {
  //   const conditions = {
  //     _id: req.params.id,
  //     'genres.name': { $ne: req.body.name }
  //   };

  //   const update = {
  //     $push: {
  //       genres: {
  //         name: req.body.name,
  //         genreId: req.body.id
  //       }
  //     }
  //   };

  //   Employee.findOneAndUpdate(conditions, update, { new: true })
  //     .then(doc => {
  //       res.json(doc);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  // app.delete('/employee/genres/:id', function(req, res) {
  //   console.log('hello' + req.body);

  //   const conditions = {
  //     _id: req.params.id
  //     // 'genres.name': { $ne: req.body.name }
  //   };

  //   const update = {
  //     $pull: {
  //       genres: {
  //         name: req.body.name,
  //         genreId: req.body.id
  //       }
  //     }
  //   };

  //   Employee.findOneAndUpdate(conditions, update, { new: true })
  //     .then(doc => {
  //       res.json(doc);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  // app.put('/employee/movies/:id', function(req, res) {
  //   const conditions = {
  //     _id: req.params.id
  //   };

  //   const update = {
  //     $push: {
  //       movies: {
  //         movieTitle: req.body.movieTitle,
  //         movieBackdrop: req.body.movieBackdrop
  //       }
  //     }
  //   };

  //   Employee.findOneAndUpdate(conditions, update, { new: true })
  //     .then(doc => {
  //       res.json(doc);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });

  // app.delete('/employee/movies/:id', function(req, res) {
  //   const conditions = {
  //     _id: req.params.id
  //   };

  //   const update = {
  //     $pull: {
  //       movies: {
  //         movieTitle: req.body.movieTitle
  //       }
  //     }
  //   };

  //   Employee.findOneAndUpdate(conditions, update, { new: true })
  //     .then(doc => {
  //       return res.json(doc);
  //     })
  //     .catch(err => {
  //       return res.json(err);
  //     });
  // });

};
