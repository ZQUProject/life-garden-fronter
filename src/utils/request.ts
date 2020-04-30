import axios from 'axios'
import router from '@/router'
import store from '@/store'
import { getToken } from '@/utils/auth';

/**
 * 创建axios实例对象
 */       
const request = axios.create({
    baseURL: process.env.VUE_APP_API,       // api的base_url
    timeout: 5 * 1000,                      // 请求超时时间
})


// request拦截器
request.interceptors.request.use(
    (config: any) => {
        config.headers = {
            'Content-Type': 'application/json',    // application/json
        }
        if (getToken()) {
            config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    (error: any) => {
        // Do something with request error
        this.$Message.error(error || error.msg || '服务器繁忙，请稍后重试') // for debug
        Promise.reject(error)
    }
  )

  // respone拦截器 响应处理
  request.interceptors.response.use(
    response => {
        const res = response.data
        // 自定义报错规则
        if (response.status !== 200) {
            const status = Number(response.status)
            const { msg } = res
            if (status === 401) {
                store.commit("setToken", null)
                this.$Message.error(msg || '无访问权限！')
                return Promise.resolve(msg || 'error')
            } else {
                this.$Message.error(msg || '服务器繁忙，请稍后重试')
                return Promise.resolve(msg || 'error')
            }
        } else {
            if (response.config.responseType === "blob") {
                return Promise.resolve(response)
            } else {
                return Promise.resolve(res)
            }
        }
    }, 
    error => {
        // 请求直接报错 for debug
        this.$Message.error(error.msg || '服务器繁忙，请稍后重试')
        return Promise.reject(error.response || error)
    }
)
export default request;