import axios from "axios";

axios.defaults.baseURL = 'https://ci-drf-api-rest-197fa5ef099b.herokuapp.com/';
axios.defaults.headers.post["Content-Type"] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();