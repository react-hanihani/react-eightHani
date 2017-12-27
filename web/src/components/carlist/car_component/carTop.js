import React from 'react'
import {Router,Route} from 'react-router'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import * as carlist_action from '../action/carlist_action'

import './carTop.scss'





class CarTop extends React.Component{
	state={

	}

	routerUrl=()=>{
		var parmas = this.props.carlistUrl.status;
		this.props.car_gblock(parmas);
		hashHistory.push(parmas);
	}

	render(){
		return (
			<div>
				<ul id="CarTop">
					<li className = "iconfont icon-fanhui" onClick={this.routerUrl}></li>
					<li><span>{this.props.topTitle}</span></li>
					<li><span className="placeName">{this.props.delTitle}</span></li>
				</ul>
			</div>
			)
	}
}


const getState=(state)=>{
	return {
		msg:state.carlistGoods,
		carlistUrl:state.carlistUrl
	}
}

export default connect(getState,carlist_action)(CarTop);