const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('index');
  });
  app.get('/favorite_personalities', (req, res) => {
    res.render('favorite_personalities');
  });
  
  app.get('/favorite_cities', (req, res) => {
    res.render('favorite_cities');
  });
  
  // Repeat for other pages
  app.get('/favorite_tourist_spots', (req, res) => {
    res.render('favorite_tourist_spots');
  });
  
  // Repeat for other pages
  app.get('/contact', (req, res) => {
    res.render('contact');
  });
  
  // Repeat for other pages
      
  