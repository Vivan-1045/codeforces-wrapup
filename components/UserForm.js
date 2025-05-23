import { useState } from 'react';

export default function UserForm({ onSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      onSubmit(username);
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


// import { useState } from 'react';

// export default function UserForm({ onSubmit }) {
//   const [username, setUsername] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const [error, setError] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError('');
//     if (!username.trim()) {
//       setError('Username is required.');
//       return;
//     }
//     setIsSubmitting(true);
//     try {
//       await onSubmit(username.trim());
//     } catch (err) {
//       setError('Failed to fetch user info. Please try again.');
//     }
//     setIsSubmitting(false);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="flex flex-col xs:flex-row items-center justify-center mb-6 w-full max-w-lg mx-auto"
//     >
//       <div className="flex w-full xs:w-auto">
//         <input
//           type="text"
//           className={`w-full xs:w-64 text-black font-semibold px-5 py-2 border transition-all duration-200 rounded-l-lg focus:outline-none focus:ring-2 ${
//             isFocused ? 'focus:ring-blue-500 border-blue-500' : 'border-gray-300'
//           }`}
//           placeholder="Enter Codeforces Username"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//             setError('');
//           }}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           disabled={isSubmitting}
//           required
//           aria-label="Codeforces Username"
//         />
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className={`text-white font-semibold px-4 py-2 bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
//             isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
//           }`}
//         >
//           {isSubmitting ? (
//             <svg
//               className="animate-spin h-5 w-5 mx-auto"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               />
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//               />
//             </svg>
//           ) : (
//             'Get Info'
//           )}
//         </button>
//       </div>
//       {error && (
//         <span className="mt-2 text-sm text-red-600 font-medium w-full text-center">{error}</span>
//       )}
//     </form>
//   );
// }
