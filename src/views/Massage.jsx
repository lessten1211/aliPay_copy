import React from "react";
import FooterTab from "../components/FooterTab";
import '../assets/Massage.less'
import { useSelector } from 'react-redux'
import { Image, List } from 'antd-mobile'

export default function Massage(){
  const users = useSelector(state => state.users.list)
  return (
    <div className="massage-container">
      <div className="header">
        <h1>消息</h1>
      </div>

<List>  
      {users.map(user => (
        <List.Item
          key={user.name}
          prefix={
            <Image
              src={user.avatar}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description={user.description}
        >
          {user.name}
        </List.Item>
      ))}
    </List>


      <div className="footer">
        <FooterTab />
      </div>
    </div>
  )
}