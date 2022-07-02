// login

export interface ILoginRequest {
  login: string
  password: string
}

export interface ILoginResponse {
  accessToken: string
}