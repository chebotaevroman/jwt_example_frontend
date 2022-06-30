// login

export interface ILoginRequest {
  login: string
  password: string
}

export interface ILoginReponse {
  accessToken: string
}