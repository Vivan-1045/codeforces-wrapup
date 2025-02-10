// lib/api.js
export const fetchUserData = async (username) => {
  const url = `https://codeforces.com/api/user.info?handles=${username}&jsonp=parseResponse`;  // Add the 'jsonp' query parameter

  return new Promise((resolve, reject) => {
    // Create a unique callback name (this can be dynamically generated)
    const callbackName = 'parseResponse';  

    // Define the callback function
    window[callbackName] = (data) => {
      if (data.status === 'OK') {
        resolve(data.result[0]);  // Return the user data if the status is OK
      } else {
        reject(new Error('Error fetching data from Codeforces'));
      }

      // Clean up after the callback has been executed
      delete window[callbackName];
      document.body.removeChild(script);  // Remove the script tag
    };

    // Dynamically create the script tag to call the API with the JSONP parameter
    const script = document.createElement('script');
    script.src = url;  // Set the URL for the JSONP request
    script.onerror = () => {
      reject(new Error('Error loading JSONP script'));
      document.body.removeChild(script);
    };

    // Append the script tag to the body to start loading the JSONP response
    document.body.appendChild(script);
  });
};


