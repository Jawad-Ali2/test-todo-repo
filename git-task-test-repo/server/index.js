// server/index.js
// Simple Express server for the demo repository

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const tasksRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const { requestLogger } = require('./middleware/logger');

app.use(express.json());
app.use(requestLogger); // NOTE: basic request logger middleware

app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

// Serve client static files
app.use('/', express.static(__dirname + '/../client'));

app.get('/health', (req, res) => {
  // TODO: Add more comprehensive health checks (db, cache)
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.listen(port, () => {
  console.log(`GitTask demo server listening at http://localhost:${port}`);
});
