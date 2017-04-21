export const auth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
