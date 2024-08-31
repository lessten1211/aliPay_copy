import axios from "axios";
import { Toast } from 'antd-mobile'

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post['Content-Type'] = 'application/json';


// 请求拦截
axios.interceptors.request.use(req=>{
  let jwtToken=localStorage.getItem('token');
  if(jwtToken){
    req.headers['Authorization'] = jwtToken;
  }
  return req;
})

// 响应拦截
axios.interceptors.response.use(
  res => {
  if (res.status !== 200) {  //程序性错误
    Toast.show({icon: 'fail',content: '服务器异常'})
    console.log(111);

    return Promise.reject(res);
  } else {
    if (res.data.code !== 800) {  //逻辑错误
      Toast.show({icon: 'fail',content: res.data.msg})
      return Promise.reject(res);
    } else {
      return res.data;
    }
  }
},
(error)=>{
  Toast.show({icon: 'fail',content: error.response.data.msg})
})

export default axios