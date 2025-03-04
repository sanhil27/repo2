import express from 'express';

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello World!');
});

app.get('test1', (req,res) => {
    res.send('working');
})


app.listen(2000, () => {
    console.log('express app listening on port 2000');
})