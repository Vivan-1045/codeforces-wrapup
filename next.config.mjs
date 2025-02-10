// next.config.mjs
export default {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/user',  // Redirect from / to /user
          permanent: true,       // This makes the redirect permanent (301 status code)
        },
      ];
    },
  };
  
