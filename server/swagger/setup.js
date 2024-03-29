import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';

// -- setup up swagger-jsdoc --
const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Mernless API',
      version: '1.0.0',
      description: 'Test Mernless API with autogenerated swagger doc',
    },
    host: 'http://localhost:5000',
    basePath: '/api/',
    schemes: ['http'],
    definitions: {
      Login: require('./definitions/login'),
      Register: require('./definitions/register'),
      Forgot: require('./definitions/password/forgot'),
      Reset: require('./definitions/password/reset'),
    },
    tags: [{
        name: 'profile',
        description: 'Everything about user profile ',
      },
      {
        name: 'auth',
        description: 'Operations about authentication',
      },
    ],
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: [path.resolve(__dirname, '../routes/*.js')],
};

export default swaggerJsdoc(options);