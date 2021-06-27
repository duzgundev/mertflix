const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
