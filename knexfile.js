'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres:localhost/pws-server'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
