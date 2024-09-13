const express = require('express');
const path = require('path');
const app = express();

// Replace 'your-angular-app' with the correct name of your Angular project
const angularAppDistPath = path.join(__dirname, 'dist/ng_new/browser');

// Serve static files from the Angular app directory
app.use(express.static(angularAppDistPath));

// Route for the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(angularAppDistPath, 'index.html'));
});

// Route for the new page
app.get('/new-page', (req, res) => {
  res.sendFile(path.join(angularAppDistPath, 'index.html'));
});

// Catch-all route for other Angular routes
app.get('*', (req, res) => {
  res.sendFile(path.join(angularAppDistPath, 'index.html'));
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
