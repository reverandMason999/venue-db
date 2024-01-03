const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;
const express = require("express");
const app = express();
const cors = require('cors');
const  { Venues } = require('./models')

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );


const server = http.createServer(app);

app.get('/venues',async (req, res) => {
    const venues = await Venues.findAll();
    res.json(venues);
});

app.post('/venues', async (req, res) => {
    const { venueName, address, description, latitude, longitude } = req.body;
    const newVenue = await Venues.create({
        venueName,
        address,
        description,
        latitude,
        longitude
    });
    res.json(newVenue);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });