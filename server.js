const express = require('express');
const SerialPort = require('serialport');
const app = express();
const port = new SerialPort('COM3', { baudRate: 115200 });  // Adjust to your Arduino's COM port

// Middleware to serve static files (your webpage)
app.use(express.static('public'));  // This will serve your frontend from the 'public' folder

// Endpoint to turn on LED
app.get('/led/on', (req, res) => {
    port.write('1');  // Send '1' to turn on the LED
    console.log('LED turned on');
    res.send('LED is ON');
});

// Endpoint to turn off LED
app.get('/led/off', (req, res) => {
    port.write('0');  // Send '0' to turn off the LED
    console.log('LED turned off');
    res.send('LED is OFF');
});

// Start the server
const server = app.listen(8081, () => {
    console.log('Server running on http://localhost:8081');
});