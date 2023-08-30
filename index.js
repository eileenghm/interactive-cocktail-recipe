import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

// Define a GET endpoint to retrieve weather data
app.get('/', async (req, res) => {
  try {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    const response = await axios.get(apiUrl);
    const cocktailData = response.data.drinks[0];

    res.render('index.ejs', { cocktailData });
  } catch (error) {
    console.error('Error fetching cocktail data:', error);
    res.render('index.ejs', { error: 'Error fetching cocktail data' });
  }
});
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });