import LoginData from "@/types/login";
import axios, { AxiosResponse } from "axios";

export default async function login(values: LoginData): Promise<LoginData> {
  try {
    const response: AxiosResponse<LoginData> = await axios.post(
      "https://dummyjson.com/auth/login",
      {
        username: values.name, //emilys
        password: values.password, //emilyspass
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    // console.error(error);
    throw error;
  }
}
