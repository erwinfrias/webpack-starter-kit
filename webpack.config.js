const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].js'
  },
  module: {
    rules: [

    ]
  },
  plugins: [

  ]
};
