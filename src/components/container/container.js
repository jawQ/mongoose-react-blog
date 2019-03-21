import React, {Component} from 'react'
import { Layout, Menu, Icon } from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;

export default class Container extends Component {
  initNavList() {
    // 数组：
    let navList = [
      {
        key: '1',
        type: 'user'
      },
      {
        key: '2',
        type: 'video-camera'
      },
      {
        key: '3',
        type: 'upload'
      }
    ]
    return navList.map(item=>{
      return(
        <Menu.item key={item.key}>
          <Icon type={item.type}></Icon>
          <span className="nav-text"></span>
        </Menu.item>
      )
    })
  }
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            {this.initNavList()}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}