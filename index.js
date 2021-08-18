const express = require('express');
const { rootRouter } = require('./routers/root.router');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) =>
    res.send('Hello') 
);


app.use('/api', rootRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

