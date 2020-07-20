import axios from "axios";

const baseURL = "https://weather-ydn-yql.media.yahoo.com/forecastrss/";
const consumerKey =
  "dj0yJmk9aElOd1JURDA2ZUVTJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTRm";
const consumerSecret = "cc35bea770bea98d6d9d61ea764cc0d437f0940a";

const requestToken = axios
  .request({
    url: "/oauth/token",
    method: "post",
    baseURL: "http://sample.oauth.server.com/",
    auth: {
      username: consumerKey,
      password: consumerSecret,
    },
    data: {
      grant_type: "client_credentials",
      scope: "public",
    },
  })
  .then((response) => {
    return response;
  });

const api = (method: any, params: any) =>
  axios.request({
    baseURL,
    headers: requestToken,
    method,
    params,
  });

export default api;
