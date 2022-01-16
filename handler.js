const serverless = require("serverless-http");
const app = import('./src/index');
module.exports.handler = serverless(app);
