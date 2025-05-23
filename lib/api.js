export const fetchUserData = async (username) => {
  const url = `https://codeforces.com/api/user.info?handles=${username}&jsonp=parseResponse`;  //Add jsonp query

  return new Promise((resolve, reject) => {
    const callbackName = 'parseResponse';  

    window[callbackName] = (data) => {
      if (data.status === 'OK') {
        resolve(data.result[0]); 
      } else {
        reject(new Error('Error fetching data from Codeforces'));
      }

     
      delete window[callbackName];
      document.body.removeChild(script);
    };

    const script = document.createElement('script');
    script.src = url; 
    script.onerror = () => {
      reject(new Error('Error loading JSONP script'));
      document.body.removeChild(script);
    };
    document.body.appendChild(script);
  });
};


