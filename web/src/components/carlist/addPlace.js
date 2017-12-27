
import React from 'react'
import {connect} from 'react-redux'
import {Link,hashHistory} from 'react-router'

import * as carlist_action from './action/carlist_action'



import CarTop from './car_component/carTop'
import './addPlace/addPlace.scss'
import './car_component/carTop.scss'

class AddPlace extends React.Component{
	
	state={
		topTitle:'地址管理',
		delTitle:'新增',
		payUrl:'payment',
		username:11

	}

	componentDidMount(){
		this.props.car_gblock('payment');
	}


	routerUrl=()=>{
		hashHistory.push(this.state.payUrl);
	}

	placeUpdate = () =>{
		var place = document.querySelector('.placeName').innerHTML;
		if(place == '新增'){
			var username = document.querySelector('#rname').value;
			var phone =  document.querySelector('#phone').value;
			var address =  document.querySelector('#address').value;
			var detail =  document.querySelector('#detail').value;
			var email =  document.querySelector('#email').value;
			var search = `?username=${username}&phone=${phone}&address=${address}&detail=${detail}&email=${email}&action=insert`;
			console.log(search);
			// this.props.writePhp(search);
		}
	}

	

	render(){
		return (
			<div>

				<div>
					<ul id="CarTop">
						<li className = "iconfont icon-fanhui" onClick={this.routerUrl}></li>
						<li><span>{this.state.topTitle}</span></li>
						<li><span className="placeName" onClick={this.placeUpdate}>{this.state.delTitle}</span></li>
					</ul>
				</div>
				<ul className="addPlace">
					<li>
						<span>收货人</span>
						<input type="text" placeholder="请输入收货人" id="rname"/>
					</li>
					<li>
						<span>手机号码</span>
						<input type="text" placeholder="请输入手机号码" id="phone"/>
					</li>
					<li>
						<span>省市地区</span>
						<input type="text" placeholder="请输入省市名"  id="address"/>
					</li>
					<li>
						<span>详细地址</span>
						<textarea id="detail"></textarea>
					</li>
					<li>
						<span>设置为默认地址</span>
						<input type="text"/>
					</li>
					<li>
						<span>邮政编码</span>
						<input type="text" placeholder="请输入邮政编码"  id="email"/>
					</li>
				</ul>
			</div>
		)
	}
}



const getState=(state)=>{
	return {
		msg:state.carlistGoods,
		carlistUrl:state.carlistUrl,
		writePHP:state.response,
	}
}

export default connect(getState,carlist_action)(AddPlace);