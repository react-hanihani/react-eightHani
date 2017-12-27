import React from 'react'
import './home.scss'
import { Affix, Input, Icon, BackTop } from 'antd';


import Bottom from '../../common_component/bottom_tab'
import Search from '../../common_component/top_search'

import {connect} from 'react-redux'
import * as HomeActions from './homeAction'

import {hashHistory} from 'react-router'

import HomeBanner from '../../common_component/homeBanner/homeBanner'
import HomeProduct from '../../common_component/homeProduct/homeProduct'


//懒加载
import { lazyload } from 'react-lazyload';
 
@lazyload({
  height: 200,
  once: true,
  offset: 100
})



class HomeComponent extends React.Component{
	state = {
		lama: ['lama.jpg','lama2.jpg','lama3.jpg'],
		banner1: 'banner.jpg',
		banner2: 'banner2.jpg',
		banner3: 'banner3.jpg',
		banner4: 'banner4.jpg',
		firstBox:[16,20],
		secondBox:[20,24],
		thirdBox:[25,26],
		toTop: false,
		

	}

	componentWillMount(){
		this.props.getHomeProduct();
	}
	
	componentDidMount(){
		//调整错误样式		// if(location.hash.startsWith('#')){
		// 	var bottomEle = document.getElementById('bottom_tab');
		// 	bottomEle.style.bottom = '-29px';



		
		window.onscroll = (e)=>{
			if(window.scrollY > 900){
				this.setState({toTop:true});
			}
		}

	}

	shouldComponentUpdate(newProps,newStates){
		if(newStates.toTop === true){
			return false;
		}
		return false;	
	}

	
	render(){	
		return (
			<div>
			<div className="home" >
				<Search></Search>
				
				<HomeBanner pic= {this.state.lama}></HomeBanner>
				
				
				<div className="display">
					<Icon type="pause" style={{ fontSize: 36, color: '#08c' }}/>
					<span className="today">今日特卖</span>
					<span className="first">万千口碑首选</span>
				</div>
				<div className="empty"></div>
				<div className="display disNext">
					<Icon type="pause" style={{ fontSize: 36, color: '#08c' }}/>
					<span className="today">品牌专区</span>
					<span className="first">万千口碑首选</span>
				</div>
				
				<lazyload>
					<HomeBanner pic= {this.state.banner1}></HomeBanner>
					<HomeProduct box= {this.state.firstBox}></HomeProduct>
	
					<HomeBanner pic= {this.state.banner2}></HomeBanner>
					<HomeProduct box={this.state.secondBox}></HomeProduct>
				</lazyload>
				<lazyload>
	
					<HomeBanner pic= {this.state.banner3}></HomeBanner>
					<HomeProduct box={this.state.thirdBox}></HomeProduct>
	
					<HomeBanner pic= {this.state.banner4}></HomeBanner>

				
				</lazyload>
				
				
			</div>
			<BackTop style = {{bottom: 140, right: 64}}>
		      <div className="ant-back-top-inner"><Icon type="up-circle-o" style={{ fontSize: 54, color: '#aaa' }} /></div>
		    </BackTop>
			<Bottom></Bottom>
		</div>
		)
	}
}

const homeState = function(state){
	return {
		dataset: state.homeReducer.response || []
	}
}


export default connect(homeState,HomeActions)(HomeComponent)
