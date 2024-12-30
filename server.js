const express = require('express');
const path = require('path');
const app = express();

// Middleware, um statische Dateien bereitzustellen
app.use(express.static(path.join(__dirname, 'public')));

// Route für die Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
