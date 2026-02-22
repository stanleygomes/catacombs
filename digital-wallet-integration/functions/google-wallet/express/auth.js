const { GoogleAuth } = require("google-auth-library");
const credentials = require("../../../config/service-account.json");

const buildHttpClient = () => {
  const httpClient = new GoogleAuth({
    credentials: getCredentials(),
    scopes: "https://www.googleapis.com/auth/wallet_object.issuer",
  });

  return httpClient;
};

const getAccessToken = async (httpClient) => {
  return await httpClient.getAccessToken();
};

const getCredentials = () => {
  return credentials;
}

module.exports = {
  getAccessToken,
  buildHttpClient,
  getCredentials
};
