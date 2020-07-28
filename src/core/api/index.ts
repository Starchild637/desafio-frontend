import OAuth from "oauth";

const header = {
  "X-Yahoo-App-Id": "Hnd5zR3T",
};

const api = () => {
  const request = new OAuth.OAuth(
    "",
    "",
    "dj0yJmk9aElOd1JURDA2ZUVTJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTRm",
    "cc35bea770bea98d6d9d61ea764cc0d437f0940a",
    "1.0",
    null,
    "HMAC-SHA1",
    0,
    header
  );
  return request;
};

export default api;
