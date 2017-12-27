import React from 'react';
import { Affix, Input, Icon } from 'antd';
import './common_css/top_search2.scss'
// import Backtrack from './src/common_component/backtrack/backtrackComponent.js'
import { hashHistory } from 'react-router'
var once = [];


export default class TopSearch extends React.Component{
	
	state = {
		onceHistory : []
	}


	onSearch(){
		
		new Promise(function(resolve,reject){
			
			var value = document.querySelector('input').value;
			once.push(value);
			resolve(once);
			
		}.bind(this)).then(function(once){
			var onceJSON = JSON.stringify(once);
			localStorage.setItem("history",onceJSON);
			
			this.props.provide(onceJSON);
		}.bind(this));
		
		
	}
	
	render(){
		return (
			<div className="box">
				<div className="scan">
					<Icon type="search" style={{ fontSize: 28, color: '#08c' }}/>
				</div>
				<div className="input"><Icon type="search" style={{ fontSize: 28, color: '#08c' }}/> <Input placeholder="请输入搜索内容" ref="searchBox"/ >
				</div>
				<div className="mess"><span onClick={this.onSearch.bind(this)}>搜索</span></div>
			</div>
		)
	}
}
