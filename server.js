// server example
const express = require('express');
const app = express();

const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.homeController);
app.get('/about', lesson1Controller.aboutController);

const PORT = 3000;  

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});