export const registerUser = (user: any) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const loginUser = (email: string, password: string) => {
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

  if (storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    return true;
  }
  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};