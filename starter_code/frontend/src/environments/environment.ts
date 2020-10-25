/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'coffee-shop-proj.us', // the auth0 domain prefix
    audience: 'coffeShop', // the audience set for the auth0 app
    clientId: '3vIs7dIHKQlo6g7h5l4ikQ7Ejz4EjNza', // the client id generated for the auth0 app
    // callbackURL: 'http://localhost:5000/drinks', // the base url of the running ionic application. 
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
