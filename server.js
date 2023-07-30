const express = require("express")
const app = express()

app.use(express.static('public'));

// Handle GET request
app.get('/gethello', (req, res) => {
  res.send('hello nodejs');
});

// Handle POST request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(8000, () => {
    console.log("listenig 8000 port")
})