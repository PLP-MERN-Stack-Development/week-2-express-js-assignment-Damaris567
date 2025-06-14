const express = require('express');
const app = express();
const productsRouter = require('./routes/routes');
const bodyParser = require('body-parser');

const logger = require('./middleware/loggers');
const auth = require('./middleware/auth');
const validation = require('./middleware/validations');
const errorHandler = require('./middleware/errorHandler');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/products', auth, validation, productsRouter);

// Error handling (should be last)
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Export the app for testing purposes
module.exports = app; 