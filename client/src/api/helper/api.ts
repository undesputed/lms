import axios from "axios";

const API = axios.create({
  // baseURL: `http://localhost:4000/api/`,
  baseURL: `http://3.0.103.175:4000/api/`,
});

// API.interceptors.request.use((req: any) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `${
//       JSON.parse(sessionStorage.getItem('profile')).token
//     }`;
//   }
//   return req;
// });

API.interceptors.request.use((req: any) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `
    ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  return req;
});

export default API;
