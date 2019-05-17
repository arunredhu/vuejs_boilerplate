const { VUE_APP_API_BASE_URL, NODE_ENV = '' } = process.env;

const environment = NODE_ENV.toLowerCase();
const apiBaseUrl = VUE_APP_API_BASE_URL;

export { environment, apiBaseUrl };
