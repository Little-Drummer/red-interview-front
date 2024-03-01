import base_requests from '@/utils/base_requests.ts'
import type { registerFormType } from '@/type/userType.ts'

export const sendVerificationCode: (email: string) => Promise<number> = (
  email: string
) => {
  return base_requests({
    url: '/verificationCode/sendVerificationCode',
    method: 'post',
    data: {
      email: email
    }
  })
}

export const registerService: (
  registerFrom: registerFormType
) => Promise<any> = (registerFrom: registerFormType) => {
  return base_requests({
    url: '/user/register',
    method: 'post',
    data: registerFrom
  })
}
