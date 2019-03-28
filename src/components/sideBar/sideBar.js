// import navList from '../../jsons/sideBar.json'
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link } from "react-router-dom";
const { Sider } = Layout;

// function initNavList() {
// 	(async ()=>{
// 		try {
// 			let firstData = await fetch(`/EAZYMOCK/navList`)
// 			let {Data} = await firstData.json()
// 			console.log('请求成功', Data)
// 			return Data
// 		} catch (error) {
// 			console.log('请求失败', error)
// 		}
// 	})()
// 	.then(res=>{
// 		let result = res.map((item)=>{
// 			return(
// 				<Menu.Item key={item.key}>
// 					<Icon type={item.type}></Icon>
// 					<span className="nav-text">{item.name}</span>
// 				</Menu.Item>
// 			)
// 		})
// 		console.log('获取result', result)
// 		return result
// 	})
// }

export default class SideBar extends Component {
	initNavList() {
		let navList = [{
			"key": '1',
			"type": "index",
			"name": "首页",
			"routerName": "index"
		},{
			"key": '2',
			"type": "folder",
			"name": "专题",
			"routerName": "special"
		},{
			"key": '3',
			"type": "smile",
			"name": "关于我",
			"routerName": "aboutMe"
		},{
			"key": '4',
			"type": "customer-service",
			"name": "Test",
			"routerName": "panel/Test"
		}]
		return navList.map((item)=>{
			return (
				<Menu.Item key={item.key}>
					<Link to={`/${item.routerName}`}>
						<Icon type={item.type}></Icon>
						<span className="nav-text">{item.name}</span>
					</Link>
				</Menu.Item>
			)
		})
	}
	render() {
		let {match} = this.props;
    console.log('SideBar match who?', this.props, match)
		return (
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => { console.log(broken); }}
				onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
			>
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					{this.initNavList()}
				</Menu>
        <Route path={`${match.url}/test`} render={()=> <div>{match.params.name}</div>}></Route>
			</Sider>
		)
	}
}
