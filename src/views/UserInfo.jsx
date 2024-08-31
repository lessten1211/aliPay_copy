import React from "react";
import { Avatar, List } from 'antd-mobile'
import {
  UnorderedListOutline,
  PayCircleOutline,
  SetOutline,
} from 'antd-mobile-icons'
import FooterTab from "../components/FooterTab";
import '../assets/userInfo.less'
export default function UserInfo(){
  return (
    <div className="user-container">
    <List>
          <List.Item
            prefix={<Avatar src="../../public/matrial/avatar.jpg" />}
            description='这是他的个性签名'
          >
             John Doe
          </List.Item>
        </List>

        <List header='可点击列表'>
        <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
          账单
        </List.Item>
        <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
          总资产
        </List.Item>
        <List.Item prefix={<SetOutline />} onClick={() => {}}>
          设置
        </List.Item>
      </List>

    <div className="footer">
        <FooterTab />
      </div>
    </div>
  )
}