// PRODUCTION ENVIRONMENT
// https://angular.io/guide/build
// to use config for another environment, specify ng serve --configuration [development, staging, production...]

export const environment = {
  production: true,
  OKTA_ISSUER: process.env['OKTA_ISSUER'] || 'NOTHING',
  OKTA_CLIENT_SECRET: process.env['OKTA_CLIENT_SECRET'],
};
