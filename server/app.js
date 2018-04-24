
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = parseInt((process.env.PORT), 10) || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.status(202)
    .json({
      message: 'Welcome to Book-A-Meal',

    });
});



app.use('*', (req, res) => {
  res.status(404);
  res.json({
    status: 'Failed',
    message: 'Page not found'
  });
});
app.listen(port, () => console.log(`Application listening  on port ${port}`));
export default app;
