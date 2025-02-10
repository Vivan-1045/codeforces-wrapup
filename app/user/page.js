// app/user/page.js
"use client";
import { useState, useEffect } from "react";
import UserForm from "../../components/UserForm";

export default function UserPage() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserData = (username) => {
    return new Promise((resolve, reject) => {
      const callbackName = "parseResponse";

      // Dynamically create the callback function
      window[callbackName] = (data) => {
        if (data.status === "OK") {
          resolve(data.result[0]); // Return the user data
        } else {
          reject(new Error("Error fetching data from Codeforces"));
        }

        // Clean up after the response is handled
        delete window[callbackName];
        document.body.removeChild(script);
      };

      // Create the script tag for JSONP request
      const script = document.createElement("script");
      script.src = `https://codeforces.com/api/user.info?handles=${username}&jsonp=${callbackName}`;

      // Handle script errors
      script.onerror = () => {
        reject(new Error("Error loading JSONP script"));
        document.body.removeChild(script);
      };

      // Append the script tag to the document
      document.body.appendChild(script);
    });
  };

  const handleUserSubmit = async (username) => {
    try {
      setError(null); // Reset any previous errors
      const data = await fetchUserData(username);
      setUserData(data); // Store the user data in state
    } catch (err) {
      setError(err.message); // Handle any errors
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-semibold mb-6 text-center text-gray-400">
        Codeforces Wrap-Up
      </h1>
      <UserForm onSubmit={handleUserSubmit} />
      {error && <p className="text-xl text-red-500 mt-4 text-center">Error: User not found</p>}
      {userData && (
        <div className="mt-6 flex justify-center">
          <div className="max-w-sm w-full bg-gray-400 shadow-lg rounded-lg overflow-hidden border border-gray-300">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={userData.avatar}
                alt="User Avatar"
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                <h2 className="text-slate-700 text-2xl font-bold">{userData.handle}</h2>
                <p className="text-slate-800 text-sm">
                  {userData.firstName} {userData.lastName}
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="p-5">
            <div className="flex justify-between mb-4">
                {userData.rating && (
                  <div className="mb-4">
                    <p className="text-slate-950 font-semibold text-2xl">
                      Current Rating
                    </p>
                    <p className="text-xl font-semibold text-blue-500">
                      {userData.rating}
                    </p>
                  </div>
                )}

                {/* max rating */}
                {userData.maxRating && (
                  <div className="mb-4">
                    <p className="text-slate-950 font-semibold text-2xl">
                      Max Rating
                    </p>
                    <p className="text-xl font-semibold text-blue-500">
                      {userData.maxRating}
                    </p>
                  </div>
                )}
              </div>


              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-slate-950 font-semibold text-2xl">Rank</p>
                  <p className="text-xl font-semibold text-blue-500">
                    {userData.rank || "No rank"}
                  </p>
                </div>
                <div>
                  <p className="text-slate-950 font-semibold text-2xl">
                    Max Rank
                  </p>
                  <p className="text-xl font-semibold text-blue-500">
                    {userData.maxRank || "No rank"}
                  </p>
                </div>
              </div>

              {/* Country */}
              <div className="flex justify-between mb-4">
                {userData.country && (
                  <div className="mb-4">
                    <p className="text-slate-950 font-semibold text-2xl">
                      Country
                    </p>
                    <p className="text-xl font-semibold text-blue-500">
                      {userData.country}
                    </p>
                  </div>
                )}

                {/* Contribution */}
                {userData.contribution !== undefined && (
                  <div className="mb-4">
                    <p className="text-slate-950 font-semibold text-2xl">
                      Contribution
                    </p>
                    <p className="text-xl font-semibold text-blue-500">
                      {userData.contribution}
                    </p>
                  </div>
                )}
              </div>

              {/* Organization */}
              <div className="flex justify-between mb-4">
                {userData.organization && (
                  <div className="mb-4">
                    <p className="text-slate-950 font-semibold text-2xl">
                      Organization
                    </p>
                    <p className="text-xl font-semibold text-blue-500">
                      {userData.organization}
                    </p>
                  </div>
                )}

                {/* Friends */}
                <div className="mb-4">
                  <p className="text-slate-950 font-semibold text-2xl">
                    Friends
                  </p>

                  <div className="text-xl font-semibold text-blue-500">
                    {userData.friendOfCount}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
