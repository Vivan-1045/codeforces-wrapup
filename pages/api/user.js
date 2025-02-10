// pages/api/user.js
import { fetchUserData } from '../../lib/api';  // Import the helper function

export default async function handler(req, res) {
  const { username } = req.query;

  // If no username is provided, send a 400 error with a message
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    // Fetch user data from Codeforces using the helper function
    const userData = await fetchUserData(username);
    
    // Send the fetched user data as the response (status 200)
    res.status(200).json(userData);
  } catch (error) {
    // If an error occurs, send a 500 status code and the error message
    res.status(500).json({ error: error.message });
  }
}

  