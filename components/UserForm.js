// import { useState } from 'react';

// export default function UserForm({ onSubmit }) {
//   const [username, setUsername] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (username) {
//       onSubmit(username);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex justify-center mb-6">
//       <input
//         type="text"
//         className="text-black font-semibold px-5 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         placeholder="Enter Codeforces Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//       />
//       <button
//         type="submit"
//         className="text-black font-semibold px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         Get Info
//       </button>
//     </form>
//   );
// }


export default function UserCard({ user }) {
  if (!user) return null;

  const statBox = (label, value, icon) => (
    <div className="flex flex-col items-center px-3 py-2 rounded-lg bg-white/30 backdrop-blur-md shadow-md border border-white/20">
      {icon && <div className="mb-1 text-blue-500">{icon}</div>}
      <span className="text-md font-bold text-gray-800">{value}</span>
      <span className="text-xs text-gray-500 font-medium">{label}</span>
    </div>
  );

  return (
    <div className="relative max-w-md mx-auto my-8 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 via-white to-purple-100 transition-all duration-300">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <img
          src={user.avatar}
          alt={user.username}
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover bg-white"
        />
      </div>
      <div className="pt-16 pb-6 px-6 flex flex-col items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-extrabold text-gray-800">{user.name || user.username}</h2>
          <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
            {user.rank}
          </span>
        </div>
        <div className="text-sm text-gray-500 font-medium mt-1 mb-2">@{user.username}</div>
        {user.organization && (
          <div className="text-xs text-purple-800 font-medium mb-1">
            {user.organization}
          </div>
        )}
        {user.country && (
          <div className="text-xs text-gray-400 mb-2">
            {user.country}
          </div>
        )}

        {/* Stats row */}
        <div className="flex gap-4 mt-4 w-full justify-center">
          {statBox(
            'Rating',
            user.rating,
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
          {statBox(
            'Max',
            user.maxRating,
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeLinecap="round"/></svg>
          )}
          {statBox(
            'Contribution',
            user.contribution,
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-8 0v2" /><circle cx="12" cy="7" r="4" /></svg>
          )}
        </div>

        {/* Optional extra stats */}
        <div className="flex gap-2 mt-6">
          {user.friends !== undefined && statBox('Friends', user.friends)}
          {user.solved !== undefined && statBox('Solved', user.solved)}
        </div>
      </div>
    </div>
  );
}
