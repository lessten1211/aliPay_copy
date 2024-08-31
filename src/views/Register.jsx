import React from "react";
import { Button, Space } from 'antd-mobile'
import { useNavigate } from'react-router-dom'
export default function Login(){
  const navigate = useNavigate()
  return (
    <>
      新用户注册

      <Button block shape='rounded' color='primary'
        onClick={()=>{navigate('/login')}}
      >
            登入
      </Button>
    </>
  )
}