import base_requests from '@/utils/base_requests.ts'
import type { loginFormType, registerFormType } from '@/type/userType.ts'
import type { AxiosResponse } from 'axios'
import type { ResultType } from '@/type/resultType.ts'
import type { userInfoType } from '@/type/userType.ts'

export const sendVerificationCode: (email: string) => Promise<number> = async (
  email: string
) => {
  return base_requests({
    url: '/verificationCode/sendVerificationCode',
    method: 'post',
    data: {
      email: email
    }
  }).then((res: AxiosResponse<ResultType<any>>) => {
    return res.data.code
  })
}

export const registerService: (
  registerFrom: registerFormType
) => Promise<ResultType<any>> = async (registerFrom: registerFormType) => {
  return base_requests({
    url: '/user/register',
    method: 'post',
    data: registerFrom
  }).then((res: AxiosResponse<ResultType<any>>) => {
    return res.data
  })
}

export const loginService: (
  loginForm: loginFormType
) => Promise<ResultType<userInfoType | { [key: string]: string }>> = async (
  loginForm: loginFormType
) => {
  return base_requests({
    url: '/user/login',
    method: 'post',
    data: loginForm
  }).then(
    (
      res: AxiosResponse<ResultType<userInfoType | { [key: string]: string }>>
    ) => {
      return res.data
    }
  )
}
