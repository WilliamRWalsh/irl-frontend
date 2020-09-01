export function setJWT(jwt) {
  localStorage.setItem("jwt", jwt);
}

export function getJWT() {
  return localStorage.getItem("jwt");
}
