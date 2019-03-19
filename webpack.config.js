const getConfig = require('hjs-webpack');

const config = getConfig({
  // entry point for the app
  in: 'src/index.js',
  out: 'dist',
  clearBeforeBuild: false,
  hot: true
});
if (process.env.NODE_ENV === 'development') {
  config.entry[0] = `${config.entry[0]}?reload=true`;
}
module.exports = config;
