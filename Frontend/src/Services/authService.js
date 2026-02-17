import api from "./api";

const authService = {
  register: async (payload) => {
    const { data } = await api.post("/users/register", payload, {
      withCredentials: true,
    });
    localStorage.setItem("token", data?.token);
    return data?.user;
  },

  logout: async () => {
    try {
      await api.post("/users/logout");
    } catch (err) {
    } finally {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  },
  

  getProfile: async () => {
    const { data } = await api.get("/users/me");
    return data;
  },
};

export default authService;
