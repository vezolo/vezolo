import axios from "axios";
import { Url } from "./constants";

const call = {
  post: async (src, params) => {
    const results = await axios.post(`${Url}/${src}`, params);
    return results;
  },
  get: async (srcObject) => {
    const requests = srcObject?.map((item, i) => axios.get(`${Url}/${item}`));
    const results = Promise.all(requests)
      .then((result) => result.map((item) => item.data))
      .catch((err) => err);

    return results;
  },
  put: async (src, params) => {
    const results = await axios.put(`${Url}/${src}`, params);
    return results;
  },
  delete: async (src, params) => {
    const results = await axios.delete(`${Url}/${src}`, params);
    return results;
  },
};

export default call;
