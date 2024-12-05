const express = require('express');
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server (only if not imported for tests)
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
