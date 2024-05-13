const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'AUTH0_ISSUER_BASE_URL': JSON.stringify(process.env.AUTH0_ISSUER_BASE_URL),
        'AUTH0_CLIENT_ID': JSON.stringify(process.env.AUTH0_CLIENT_ID)
      }
    })
  ]
};
