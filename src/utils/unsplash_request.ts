import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.unsplash.com/' // nginx代理

const instance = axios.create({
  // 基础地址，超时时间
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    // 1. 添加版本
    config.headers['Accept-Version'] = 'v1'
    // 2. 添加Access Key
    config.headers.Authorization = 'Client-ID TC_QAbuL_H3FsNdTi5vRrbwn4nqbnODpFyn3ZZGnwQU'
    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => {
    // console.log(res)
    // 1为成功 其他为失败
    if (res.status === 200) {
      return res.data
    }
    //处理业务失败
    ElMessage({
      message: res.data.msg || '服务异常',
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
