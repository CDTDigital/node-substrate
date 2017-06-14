'use strict';

const env    = process.env.APP_ENV || 'development';

if (env === 'development' || env === 'test') {
  require('dotenv').config();
}

const port   = process.env.PORT || getPort(env);

function getPort(env) {
  return env === 'development' ? 3000 : 3333;
}

module.exports = {
  env: env,
  port: port
};

