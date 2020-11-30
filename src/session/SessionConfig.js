import Cookies from "js-cookie";

export const setSessionCookie = (session) => {
  Cookies.remove("session");
  Cookies.set("session", session);
};

export const getSessionCookie = () => {
  const sessionCookie = Cookies.get("session");
  if (!sessionCookie) {
    return {};
  }
  return JSON.parse(sessionCookie);
};
