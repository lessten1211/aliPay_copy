import React,{useState} from "react";
import {  Form, Input,Toast  } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import'../assets/Login.less'
import axios from "../api/index.js";
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event);
  };

  const handlePasswordChange = (event) => {
    setPassword(event);
  };

const LoginPush =async()=>{
  const values={username,password}
  console.log(values); //向后端发请求将账号密码传给后端
  // const res = await axios.post("/user/login", values);
  // console.log(res);
  // localStorage.setItem("userInfo", JSON.stringify(res.data));
  // localStorage.setItem("token", res.token);


  Toast.show({
    icon: 'success',
    content: '登入成功',
    duration:'800'
  })
  navigate('/classIndex')
}


  return (
    <div className="login-container">
      <h1>登入</h1>

      <div className="loginCard">
      <div className="image">
        <img src="../../public/matrial/avatar.jpg" alt="默认头像" />
      </div>

      {/* <DemoBlock title='配合列表使用-竖直布局' padding='0'> */}
        <Form layout='vertical'>
          <Form.Item label='用户名' name='username'>
            <Input placeholder='请输入用户名' clearable={true}
                  value={username}
                  onChange={handleUsernameChange} />
          </Form.Item>
          <Form.Item label='密码' name='password'>
            <Input placeholder='请输入密码' clearable={true} type='password' 
   
             value={password}
             onChange={handlePasswordChange}
            />
          </Form.Item>
        </Form>
      <button onClick={() => { LoginPush() }} className="loginBtn">
        登入
      </button>

      </div>

      <div className="register"  onClick={()=>{ navigate('/register')} }>新用户？点击这里注册</div> 
    </div>
  )
}