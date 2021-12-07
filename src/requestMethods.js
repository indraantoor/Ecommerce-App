import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWUyMDc4NGI1ZmUzODAwOTE3OGVjMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODg5Nzk1OCwiZXhwIjoxNjM5MTU3MTU4fQ.wVhfKt7pwkdtTN4Qtl7OC_YfUEckdE8GkFd80gqGV5E";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: {
    token: `Bearer ${TOKEN}`,
  },
});
