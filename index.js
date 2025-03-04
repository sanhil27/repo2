import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const a = 5;
    const b = 6;
    res.send(`${a} + ${b} = ${a + b}`);
});

app.listen(2000, () => {
    console.log('express app listening on port 2000');
})