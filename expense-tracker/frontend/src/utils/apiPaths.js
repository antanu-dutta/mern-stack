export const BASE_URL = "http://localhost:8000";

// utils/apiPath.js
export const API_PATH = {
  AUTH: {
    LOGIN: "/api/v1/auth/login",
    REGISTER: "/api/v1/auth/register",
    GET_USER_INFO: "/api/v1/auth/getUser",
  },
  DASHBOARD: {
    GET_DATA: "/api/v1/dashboard",
  },
  INCOME: {
    ADD_INCOME: "/api/v1/income/add",
    DELETE_INCOME: (incomeId) => `/api/v1/income/${incomeId}`,
    GET_ALL_INCOME: "/api/v1/income/get",
    DOWNLOAD_INCOME: "/api/v1/income/downloadexcel",
  },
  EXPENSE: {
    ADD_EXPENSE: "/api/v1/expense/add",
    DELETE_EXPENSE: (incomeId) => `/api/v1/expense/${incomeId}`,
    GET_ALL_EXPENSE: "/api/v1/expense/get",
    DOWNLOAD_EXPENSE: "/api/v1/expense/downloadexcel",
  },
  IMAGE: {
    UPLOAD_IMAGE: "/api/v1/auth/upload-image",
  },
};
