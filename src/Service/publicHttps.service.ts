import axios from "axios";

export const get: any = async (ePoint: string, params?: any): Promise<any> => {
  return await axios.get(ePoint);
};

export const post = async (
  ePoint: string,
  data: any,
  params?: any
): Promise<any> => {
  return await axios.post(ePoint, data);
};

export const put = (ePoint: string, data: any): Promise<any> => {
  return axios.put(ePoint, data);
};
