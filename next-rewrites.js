async function rewrites() {
  return [
    // {
    //   source: '/api/:path*',
    //   destination: 'https://gateway.chotot.org/api-cah/:path*', // Replace with your custom domain
    // },
    // {
    //   source: '/api/hello',
    //   destination: '/api/:path*', // Replace with your custom domain
    // },
    {
      source: '/admin',
      destination: '/',
    },
  ];
}

// eslint-disable-next-line import/no-commonjs
module.exports = rewrites;
