import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWUyMDc4NGI1ZmUzODAwOTE3OGVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODg3MDkzMiwiZXhwIjoxNjM5MTMwMTMyfQ.ETIS2u1r2FJQy8OjdIguj3Nj0cukxzSWUSYpDNsBdK8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
