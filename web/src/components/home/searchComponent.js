import React from 'react';
import './search.scss';
import {Icon, Button} from 'antd';
import {hashHistory} from 'react-router'

import Search from '../../common_component/top_search2.js'

var hisStorage = localStorage.getItem('history')

export default class SearchContent extends React.Component{

	state = {
			keyWord : ['顶呱呱','贝亲','奶粉','花王','费雪','德啤','将军','纸巾','纸箱'],
			history : []
	}

	ajaxSearch(item){

	}
	getChildHistory(txt){

		if( hisStorage){
			var need = JSON.parse(localStorage.getItem('history'));
			this.setState({history:need});
		}
	}
	
	componentWillMount(){
		var current = JSON.parse(localStorage.getItem('history'));
		this.setState({history:current});
	}

	render(){
		if(localStorage.length<=0){
			var removeEle = document.querySelector('.searchContent');
			 removeEle.parentNode.removeChild(removeEle);
		}
		
		
		return (
			<div>
				<Search provide={this.getChildHistory.bind(this)}></Search>
				<div className="everySearch">
					<Icon type="search"  style={{ fontSize: 32, color: '#08c' }}/>
					<span>大家都在搜</span>
				</div>
				<div className="searchContent">
					{
						 this.state.keyWord.map((item)=>{
						 	return <Button key={item} onClick={this.ajaxSearch(item)}>{item}</Button>
						 })
					}
				</div>
				<div className="everySearch">
					<Icon type="search"  style={{ fontSize: 32, color: '#08c' }}/>
					<span>历史记录</span>
					<i className="iconfont icon-shanchu trash"/>
				</div>
				<div className="searchContent">
				{
					this.state.history.map((item,idx)=>{
						return  <Button key={item+idx}>{item}</Button>
					})
				}
				</div>
			</div>
		)
	}
}
