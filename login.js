import axios from "axios";

const baseURL = "http://ec2-52-66-220-192.ap-south-1.compute.amazonaws.com";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const tokenPlugin = (token) => {
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
};

const Auth = {
  getUser: (token) => instance.get("/auth/users/me/", tokenPlugin(token)),
  register: (registerData) => instance.post("/auth/create/user/", registerData),
  login: (loginData) => instance.post("/auth/jwt/token/create/", loginData),
  otp: (code) => instance.post("/auth/activate/user/", { code }),
  activate: (uid, token) =>
    instance.post("/auth/users/activation/", { uid, token }),
  resetPassword: (phone) =>
    instance.post("/auth/verify/phno/", { phone_number: phone }),
  confirmResetPassowrd: (data) => instance.post("/auth/change/password/", data),
};

export default { Auth};



http://43.205.91.117:8000/api/trucks_inside