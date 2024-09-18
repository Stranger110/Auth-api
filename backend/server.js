const express = require('express');
const cors = require('cors');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');
const firebaseAdmin = require('firebase-admin');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Clerk setup
const clerkMiddleware = ClerkExpressWithAuth({
  apiKey: process.env.VITE_CLERK_PUBLISHABLE_KEY,
});

// Firebase Admin setup
const serviceAccount = require('./myauth-d1e39-firebase-adminsdk-2vx4d-ebb65e8b79.json');
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

// Route to get user profile from Clerk
app.get('/user-profile', clerkMiddleware, (req, res) => {
  const userId = req.auth.userId;
  // Fetch user profile logic here
  res.json({ message: `Hello, user ${userId}` });
});

// Firebase Database Integration Example
app.post('/save-user-data', (req, res) => {
  const { userId, data } = req.body;
  firebaseAdmin.firestore().collection('users').doc(userId).set(data)
    .then(() => res.status(200).send('Data saved!'))
    .catch(err => res.status(500).send(err));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
