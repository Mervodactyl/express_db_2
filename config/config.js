var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-db-2'
    },
    port: 3000,
    db: 'postgres://localhost/express-db-2-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-db-2'
    },
    port: 3000,
    db: 'postgres://localhost/express-db-2-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-db-2'
    },
    port: 3000,
    db: 'postgres://localhost/express-db-2-production'
    
  }
};

module.exports = config[env];
