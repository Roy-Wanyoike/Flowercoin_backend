import express from 'express';
import connectDB from './db';
import passport from './middleware/auth';
import securityMiddleware from './middleware/security';

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());
securityMiddleware(app);

// Connect to database
connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/wallet', require('./routes/wallet'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
