import { AxiosPromise } from "axios";
import Enpoints from "../endpoints";
import { axiosInstance } from "../instance";
import { ILoginReponse, ILoginRequest } from "./types";

export const login = (params: ILoginRequest): AxiosPromise<ILoginReponse> =>
  axiosInstance.post(Enpoints.AUTH.LOGIN, params)