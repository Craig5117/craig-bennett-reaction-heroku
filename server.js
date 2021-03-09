const express = require('express');
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// middleware for post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


const whitelist = ['http://localhost:3000'​, 'http://localhost:5000', "https://morning-wildwood-93642.herokuapp.com/"]
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`))