const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Example API Endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the API! how are you motherfucker" });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
