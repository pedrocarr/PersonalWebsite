const express = require ('express');
const PORT = 3000;
const app = express();


app.get('/', (req, resp) => {
    resp.send('Hello Word!')
});

app.listen(PORT, () => {
console.log(`app is running on port ${PORT}!!`)
});