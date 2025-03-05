import express from 'express';

const app = express();

app.get('/', (req, res) => {
    const a = 5;
    const b = 6;
    res.send(`${a} + ${b} = ${a + b}, ${a*b}`);
});


app.get('/js',(req,res) => {
    res.send('new testing');
}) 

app.get('/js',(req,res) => {
    res.send('new testing1');
})
app.get('/js',(req,res) => {
    res.send('new testing2');
})

app.listen(2000, () => {
    console.log('express app listening on port 2000');
})