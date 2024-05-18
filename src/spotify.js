import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "f7df0e1b1c924ca28956e4900a59d5e8";
const redirectUri = "http://localhost:3000";
//const redirectUri = "https://musicplayer-eosin.vercel.app"; // Updated to Vercel URL
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(
  async function (config) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export default apiClient;
