import React from 'react';
import { Menu, Input, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import './common_css/top_search.scss'
import { hashHistory } from 'react-router'

export default class TopSearch extends React.Component{
	state = {
		current: 'email'
	}
	
	onjump(){
		if(!window.location.hash.endsWith('search')){
			hashHistory.push('search');
		}
	}
	
	handleClick = (e) => {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	}

	
	render(){
		var tab = 
			 <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="homePage">
         首页
        </Menu.Item>
        <Menu.Item key="shoes">
         鞋服
        </Menu.Item>
        <Menu.Item key="toy">
          玩具
        </Menu.Item>
         <Menu.Item key="proviant">
          用品
        </Menu.Item>
         <Menu.Item key="furniture">
          家居
        </Menu.Item>
        <Menu.Item key="family">
         食品
        </Menu.Item>
        <Menu.Item key="new">
          新品上架
        </Menu.Item>
      </Menu>
		
		return (
			<div className="Ceiling">
				<div className="box">
					<div className="scan"><Icon type="scan" style={{ fontSize: 20, color: '#08c' }}/  ></div>
					<div className="input"><Icon type="search" style={{ color: '#08c' }}/> <Input placeholder="请输入搜索内容" onClick={this.onjump}/>
					</div>
					<div className="mess"><Icon type="message" style={{ fontSize: 20, color: '#08c' }}/></div>
				</div>
				<div className="navbox">
					{tab}
				</div>
			</div>	
			
		)
	}
}
