// components/UserForm.js
// components/UserForm.js
import { useState } from 'react';

export default function UserForm({ onSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      onSubmit(username); // Call the parent function with the username
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        className="text-black font-semibold px-5 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Codeforces Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button
        type="submit"
        className="text-black font-semibold px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Get Info
      </button>
    </form>
  );
}
