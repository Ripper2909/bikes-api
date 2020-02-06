const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bikesRoutes = require('./routes/bikes');

//Middleware(s)
app.use(express.json());

//First route
app.get('/', (req, res) => {
    res.send('Welcome to Bikes API');
});

app.use('/api/bikes', bikesRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});