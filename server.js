const express = require('express');
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// middleware for post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// const whitelist = ['http://localhost:3000'​, 'http://localhost:5000', "https://craigbennett-reaction.herokuapp.com/"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("** Origin of request " + origin)
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       console.log("Origin acceptable")
//       callback(null, true)
//     } else {
//       console.log("Origin rejected")
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions))


// if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.use(routes);
  // Handle React routing, return all requests to React app

  app.get('*', function(req, res) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      console.log("Redirecting to https")
      console.log(req.headers.host)
      console.log(req.url)
      return res.redirect('https://' + req.headers.host);
    } 
    else {
      console.log("Standard route")
      console.log(req.headers.host)
      console.log(req.url)
      return res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    }     
});
    // app.get('*', function(req, res) {
    //   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    // });


app.listen(port, () => console.log(`Listening on port ${port}`))