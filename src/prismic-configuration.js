import Prismic from "@prismicio/client";

export const apiEndpoint = "https://dry-john.cdn.prismic.io/api/v2";
export const accessToken =
  "MC5ZRTlWNmhJQUFDWUFyQWM5.Te-_ve-_vTPvv73vv71OB--_ve-_ve-_vVPvv73vv71F77-977-9RX4777-977-977-977-977-9NO-_vUYaBgPvv70";

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
export const linkResolver = (doc) => {
  if (doc.type === "post") {
    return `/post/${doc.uid}`;
  }
  return "/";
};
