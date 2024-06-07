import axios from 'axios'
//创建axios实例
const service = axios.create({
    baseURL: 'http://124.222.203.172:8081', // api的base_url。此处为nginx的地址
    timeout: 50000 // 请求超时时间
})

export default service