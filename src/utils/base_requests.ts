import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

// const baseURL = 'https://redbook.yjxw.win/api' // nginx代理
const baseURL = '/api' // nginx代理

const instance = axios.create({
  // 基础地址，超时时间
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => Promise.reject(err)
)
interface ResponseData<T> {
  code: number
  data: T
  message: string
}
instance.interceptors.response.use(
  (res: AxiosResponse<ResponseData<any>>): any => {
    // console.log(res)
    // 1为成功 其他为失败
    if (res.data.code === 200) {
      return res.data.data
    }
    //处理业务失败
    ElMessage({
      message: res.data.message || '服务异常',
      type: 'error'
    })
    return Promise.reject(res.data)
  },
  (err) => {
    // 处理401的错误
    //错误的特殊情况
    // if (err.response?.status === 401) {
    //   router.push('/login')
    // }
    //错误的默认情况=>只要给提示
    // ElMessage.error(err.message || '服务异常')
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
