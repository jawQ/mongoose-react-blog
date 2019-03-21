import React, {Component} from 'react'
import { Layout } from 'antd';
import SideBar from '../sideBar/sideBar'
const {Header, Content, Footer } = Layout;

export default class Container extends Component {
  render() {
    return (
      <Layout>
        <SideBar />
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