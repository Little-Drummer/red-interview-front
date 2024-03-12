interface registerFormType {
  email: string
  password: string
  verificationCode: string
}
interface loginFormType {
  email: string
  password: string
}

interface userInfoType {
  id: number
  email: string
  name: string
  gender: number
  bio: string
  avatar: string
  userType: number
  token: string
}

export type { registerFormType, loginFormType, userInfoType }
