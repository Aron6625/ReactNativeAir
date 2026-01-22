const DEV_API_URL = 'http://192.168.0.14:3000';
const PROD_API_URL = 'http://192.168.0.14:3000';

export const ENV = {
  API_URL: __DEV__ ? DEV_API_URL : PROD_API_URL,
};
