// import navList from '../../jsons/sideBar.json'
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

export default class SideBar extends Component {
  initNavList(){
		let newNavList = navList.map(item=>{
			return(
				<Menu.Item key={item.key}>
					<Icon type={item.type}></Icon>
					<span className="nav-text">{item.name}</span>
				</Menu.Item>
			)
		})
		console.log(newNavList)
		return newNavList
	}
	render() {
		return (
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => { console.log(broken); }}
				onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
			>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
					{this.initNavList()}
				</Menu>
			</Sider>
		)
	}
}
