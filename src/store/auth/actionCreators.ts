import { Dispatch } from "@reduxjs/toolkit"
import api from "../../api"
import { ILoginRequest } from "../../api/auth/types"
import { loginStart, loginSucess, loginFailure, logoutSuccess } from "./authReducer"
import { history } from '../../utils/history'

export const loginUser =
  (data: ILoginRequest) =>
    async (dispatch: Dispatch): Promise<void> => {
      try {
        dispatch(loginStart())

        const res = await api.auth.login(data)

        dispatch(loginSucess(res.data.accessToken))
        // dispatch(getProfile())
        
      } catch (e: any) {
        console.error(e)

        dispatch(loginFailure(e.message))
      }
    }

export const logoutUser =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
      try {
        await api.auth.logout()

        dispatch(logoutSuccess())

        history.push('/')
      } catch (e) {
          console.error(e)
      }
  }