import { fetchUserData } from '../../lib/api'; 

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const userData = await fetchUserData(username);
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

  
