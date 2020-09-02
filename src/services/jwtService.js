import jwtDecode from "jwt-decode";

export function setJWT(jwt) {
  localStorage.setItem("jwt", jwt);
}

export function getJWT() {
  return localStorage.getItem("jwt");
}

export function getCurrentUser() {
  const jwt = getJWT();
  try {
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
