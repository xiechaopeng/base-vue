import axios from 'axios'
// 创建一个axios实例
const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : '',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 45000 // 请求超时时间
})
// 注册请求拦截器
axiosInstance.interceptors.request.use(config => {
  // config.data = config.data || {}
  // config.data.common = {} // 可加公共参数
  if (window.localStorage) {
    if(localStorage.token) {
      config.headers['token'] = localStorage.token
    }
  }
  return config
}, err => {
  return Promise.reject(err)
})
// 注册响应拦截器
axiosInstance.interceptors.response.use(response => {
  let res = response.data
  if (res.code === 200) {
    return Promise.resolve(res.data)
  } else {
    alert(res.err_msg||'数据获取失败')
    return Promise.resolve(res)
    // return Promise.reject(res.data)
  }
}, err => {
  return Promise.reject(err.message)
})

export default {
  install(Vue) {
    Vue.prototype.$ajax = axiosInstance
  },
  ajax:axiosInstance
}
