
import React from 'react'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import CarTop from './car_component/carTop.js'
import Car_goods from './car_component/car_goods'
import PayNav from './payment_Component/payNav_bt'


import './payment_Component/payment.scss'
import * as carlist_action from './action/carlist_action'


var PayStyle = {display:'none'}

class Payment extends React.Component{
	state={
		topTitle:'确认订单',
		statusX:1,
		payState:0,
		payState1:0,
		bt_garden:0,
		goldPay:2,
		freight:8,
		payPrice:0,
		payTotalPrice:0,
		paygoodDetail:[],
		placeMsg:[],
		username:'创建地址',
		phone:'',
		detailPlace:'',
		total:[]

	}

	componentDidMount=()=>{
		//删除组件中的结算
		var carlist_count = document.querySelector('.carlist_count');
		carlist_count.parentNode.removeChild(carlist_count)
		this.setState({paygoodDetail:this.props.good_arrs});

		//获取新的地址，写入页面
		// var username = `?username=liangz`;
		// this.props.writePhp(username);
		this.props.car_gblock('carlist');
	}



	routerUrl=()=>{
		//跳转新增地址页面
		hashHistory.push('addPlace');
	}



	componentDidUpdate=()=>{
		var eventSend = document.querySelector('#eventSend');
		var add_del = eventSend.querySelectorAll('#add_count');
		var shop_checkbox = eventSend.querySelectorAll('#shop_checkbox');

			for(var i = 0;i<add_del.length;i++){
				add_del[i].parentNode.removeChild(add_del[i]);
				shop_checkbox[i].style.border = "none";
				shop_checkbox[i].style.zIndex = "-100";
			}

		// if(this.state.placeMsg.length == 0){
			
		// 	if(this.props.writemsg !== undefined){
		// 		var place = JSON.parse(JSON.stringify(this.props.writemsg.data));
		// 		this.setState({placeMsg:place});
		// 		this.setState({username:place[0].username});
		// 		this.setState({phone:place[0].phone});
		// 		this.setState({detailPlace:`${place[0].address}${place[0].detail}`});
				
		// 		// var html = 
				
		// 	}

		// }

		var cart_price = document.querySelectorAll('#cart_price');

		if(this.state.total.length==0){
			//遍历循环，获取总价
			var cart_price = document.querySelectorAll('#cart_price');
			var total = 0;
			for(var i = 0; i<cart_price.length;i++){
				total+= Number(cart_price[i].innerHTML);
			}

			this.setState({total:[total]})

		}
	
	}



	payClick=(e)=>{
		//微信支付宝，点击切换，进行选定
		if(e.target.className=='payClick'){
			if(this.state.payState ==0){

				this.setState({payState:1});
				this.setState({payState1:0});
				document.querySelector('.payClick1').style.background = "#ccc";
				e.target.style.background = "#F74747";
			} else{
				this.setState({payState:0});
				e.target.style.background = "#ccc";
			}

		}else if(e.target.className=='payClick1'){

			if(this.state.payState1 ==0){
				this.setState({payState1:1});
				this.setState({payState:0});
				document.querySelector('.payClick').style.background = "#ccc";
				e.target.style.background = "#F74747";
			} else{
				this.setState({payState1:0});
				e.target.style.background = "#ccc";
			}

		}

	}

	addGold=(e)=>{

		if(e.target.className == 'bt_garden'){
			if(this.state.bt_garden == 0){
				this.setState({bt_garden:1});
				e.target.style.transform = "translateX(60%)";
				e.target.parentNode.style.background ="#F74747";
			}else if(this.state.bt_garden == 1){

				this.setState({bt_garden:0});
				e.target.style.transform = "translateX(0)";
				e.target.parentNode.style.background ="#ccc";

			}
		}

	}

	minOrder=()=>{
		hashHistory.push('mineorder');
	}


	render(){

		return (
		<div>
			<CarTop  delTitle={this.state.topTitle1} topTitle={this.state.topTitle}/>
			<p className= "payment_top">
				<span onClick={this.routerUrl}>
					<span><ins>{this.state.username}</ins><ins>{this.state.phone}</ins></span>
					<span>{this.state.detailPlace}</span>
				</span>
				<span className= "iconfont icon-icon10"></span>
			</p>
			<h2 className= "line_transition"></h2>
			<div className= "payment_good_list">
				<Car_goods/>
				<ul className= "payment_list">
					<li>
						<span onClick={this.msg}>优惠券</span>
						<span>
							<span className="youHuiQuan">可用<i>0</i>张优惠券</span>
							<span className="iconfont icon-icon10"></span>
						</span>
					</li>
					<li>
						<span>运费</span>
						<span>￥<i>{this.state.freight}</i></span>
					</li>
					<li>
						<span>小计</span>
						<span>￥<i>233.1</i></span>
					</li>
					<li>
						<input type="text" placeholder= "买家留言" onChange={this.comments}/>
					</li>
				</ul>
				<h2 className= "line_transition"></h2>
				<div className="list">
					<ul className="payment_list">
						<li>
							<span>商品总额</span>
							<span>￥<i>0</i></span>
						</li>
						<li>
							<span>运费</span>
							<span>￥<i>{this.state.freight}</i></span>
						</li>
						<li>
							<span>使用优惠券</span>
							<span>- ￥<i>233.1</i></span>
						</li>
						<li>
							<span>可用 <i>{this.state.goldPay}</i> 金币可抵押￥ - <i>{this.state.goldPay}</i>:</span>
							<span className="change_button" onClick={this.addGold}>
								<button><b className="bt_garden"></b></button>
							</span>
						</li>

					</ul>
				</div>
				<h2 className= "line_transition"></h2>
				<div className="total_count">
					<span>总计：</span>
					<span>￥<i>233.1</i></span>
				</div>
				<h2 className= "line_transition"></h2>
				<div className="payWay">
					<span>支付方式</span>
				</div>
				<div className="payWays">
					<span><b className="payClick" onClick={this.payClick}></b></span>
					<span className="iconfont icon-zhifubao"></span>
					<span>支付宝</span>
				</div>
				<div className="payWays">
					<span><b className="payClick1" onClick={this.payClick}></b></span>
					<span className="iconfont icon-weixinzhifu"></span>
					<span>微信支付</span>
				</div>
			</div>

			<PayNav payOrder={this.minOrder} Prices={this.state.total[0]}/>
		</div>
			)
	}
}


const getState=(state)=>{
	console.log('1111111111',state)
	return {
		msg:state.carlistGoods.response,
		carlistUrl:state.carlistUrl,
		good_arrs:state.good_arrs.status,
		writemsg:state.writePHP.response,
	}
}

export default connect(getState,carlist_action)(Payment);