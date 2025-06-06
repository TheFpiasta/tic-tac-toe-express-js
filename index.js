const express = require('express');
const path = require('path');
const sassMiddleware = require('express-dart-sass');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Set up SCSS middleware
app.use(sassMiddleware({
    src: path.join(__dirname, 'src/scss'),
    dest: path.join(__dirname, 'public/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css'
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// No need for a view engine for static HTML files

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
