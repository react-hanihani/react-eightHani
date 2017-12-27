import React from 'react'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import './car_goods.scss'
import './count.scss'

import * as carlist_action from '../action/carlist_action'
import changeState from '../action/changeState'



class Car_goods extends React.Component{

	state={
		num:1,
		parmas:'parmas',
		checkSrc:'./src/assets/imgs/check_alt.png',
		selected:2,
		statusMsg:[],
		resetMsg:[],
		checkAll:0,
		singleOrAll:1,

	}

	routerUrl=()=>{
	// 跳转付款页面
	var good_arr = [];
	this.state.statusMsg.map(item=>{
		if(item.status==1){
			var id = item.id;
			var qty = item.qty;
			var obj = {id:id,qty:qty,Prices:this.props.totalPrice.status};
			good_arr.push(obj);
		}
	})

	this.props.goods_arr(good_arr);
	

	// var parmas = `1&action=get`;
	var parmas = {username:1,action:'get'};
	this.props.ajaxGetMsg(parmas);
	//跳转前，改变ajax的请求参数，
	// 进行重新请求，改变数据源

	var parmas = 'carlist';
	hashHistory.push('payment');

	}

	changeState=()=>{
		this.setState({checkAllNumber:++this.state.checkAllNumber});
		this.props.checkAllNumber(this.state.checkAllNumber);
	}


	componentDidUpdate = () => {
		
		//获取购物车初始商品的selected,id,数量，price
		var datas = this.dataMsg();
		if(this.state.statusMsg.length==0){
			if(datas){
				var datax = JSON.parse(JSON.stringify(datas));
				this.setState({statusMsg:datax})
				// 改变商品的数量
			}
		}


		var eventSend = document.querySelector('#eventSend');
			eventSend.onclick = e =>{

				this.setState({singleOrAll:2});

				if(e.target.className == 'delCount'){

					var input = e.target.parentNode.children[1];
					var values = input.value;
					if(values<=1){
						return;
					}
					input.value = --values;
					this.add_del_select(e);
				}else if(e.target.className == 'addCount'){

					var input = e.target.parentNode.children[1];
					var values = input.value;
					input.value = ++values;
					this.add_del_select(e);
				}else if(e.target.id == 'shop_checkbox'){

					//传参源目标
					var target = e.target;
					this.changeSelect(target);
					
				}
			}
	}

	changeSelect = (target) =>{

		//点击选择图标
		//计算总价以及记录状态，函数回调
		//商品id,数量,选择状态，价格
		//整合数组对象，进行统计价格，以及进行付款
		//页面传递对象状态，获取后台数据
		
		var _id = target.getAttribute("data-id");
		var parentTarget = target.parentNode;
		var selectNum = parentTarget.querySelector('.numberValue').value;


		if(target.style.background !== ''){
			target.style.background = '';

			//2是判断状态，以及修改状态
			var data = {qty:selectNum,status:2,id:_id};

			// 修改数据库
			var search = {action:'del',id:_id};
			changeState(search);


			this.traverse(data);

		}else{
			
			target.style.background = 'url('+this.state.checkSrc+') no-repeat';
			var data = {qty:selectNum,status:1,id:_id};

			// 修改数据库
			var search = {action:'update',id:_id};
			
			changeState(search);


			this.traverse(data);

		}
	}


	add_del_select = (e) =>{

		var target = e.target;

		//点击数量 + - 修改，判断是否是已经选择的，选择则计算总价
		var checkProps = target.getAttribute('key');
		var checkbox = document.querySelector("."+checkProps);
		var src = checkbox.style.background;

		if(src){

			var _id = checkbox.getAttribute("data-id");
			var parentTarget = checkbox.parentNode;
			var selectNum = parentTarget.querySelector('.numberValue').value;

			//2是判断状态，以及修改状态
			var data = {qty:selectNum,status:1,id:_id};
			this.traverse(data);
		}else{
			return;
		}
	}


	traverse=(data)=>{
		//改变数据
		//打勾时候更改状态为1，或者去掉打勾，
		//商品状态更改为2，不计算进总价
		var totalPrice=0;

		//结算的商品种类
		var _Number = 0;
		this.state.statusMsg.map(item=>{

			if(data.id==item.id){
				item = Object.assign(item,data);
			}
			//计算总价，写入页面
			if(item.status == 1){
				_Number++;
				totalPrice+= parseInt(item.price)*Number(item.qty);
			}
		})
		this.setState({statusMsg:this.state.statusMsg});
		this.props.TPrice(totalPrice,_Number);
	}




	checkAll=()=>{

		this.setState({checkAll:++this.state.checkAll});

		var eventSend = document.querySelector("#eventSend");
		var checkbox = eventSend.querySelectorAll("#shop_checkbox");
		
		var _data=[];
		// ----------------------------------------------------------
		if((this.state.checkAll)%2 !== 0){

			for(var i = 0; i<checkbox.length ;i++){
				checkbox[i].style.background = 'url('+this.state.checkSrc+') no-repeat';

				var _id = checkbox[i].getAttribute("data-id");
				var parentTarget = checkbox[i].parentNode;
				var selectNum = parentTarget.querySelector('.numberValue').value;
				var price = parentTarget.querySelector('#cart_price').innerHTML;
				var data = {qty:selectNum,status:1,id:_id,price:price};

				//更改该数据状态
				// 修改数据库
				var search = {action:'update',id:_id};
				changeState(search);

				_data.push(data);

			}

			this.checkAll_select(_data);

		}else if((this.state.checkAll)%2 == 0){
			for(var i = 0; i<checkbox.length ;i++){

				checkbox[i].style.background = '';

				var _id = checkbox[i].getAttribute("data-id");
				var parentTarget = checkbox[i].parentNode;
				var selectNum = parentTarget.querySelector('.numberValue').value;
				var price = parentTarget.querySelector('#cart_price').innerHTML;
				var data = {qty:selectNum,status:1,id:_id,price:price};
				_data.push(data);

				//更改该数据状态
				// 修改数据库
				var search = {action:'del',id:_id};
				changeState(search);

			} 

			this.checkAll_select(null);
		}

	}



	checkAll_select=(_data)=>{

		if(_data==null){
			this.state.statusMsg.map(item=>{
				if(item.status = 1){
					item.status = 2;
				}
			})

			this.setState({statusMsg:this.state.statusMsg});
			this.props.TPrice(0,0);
			return;
		}

		var _datas = Object.assign(this.state.statusMsg,_data);
		this.setState({statusMsg:_datas});

		var totalPrice=0;
		//结算的商品种类
		var _Number = 0;
		this.state.statusMsg.map(item=>{
			//计算总价，写入页面
			if(item.status == 1){
				_Number++;
				totalPrice+= parseInt(item.price)*Number(item.qty);
			}
		})

		this.props.TPrice(totalPrice,_Number);
	}




	dataMsg = () =>{

		var calculate = [];
		if(this.props.msg){

			//建立对象数组用于计算总价，已经判断选择状态
			this.props.msg.map((item) =>{
				var data = {qty:1,status:this.state.selected,id:item.id,price:item.todayPrice};
				calculate.push(data);
			})

			return calculate;
		}
	}




	goodsUpdate = () =>{
		if(this.props.msg !== undefined){
			var text = this.props.msg.map((item,key)=>{

						var items = item.imgUrl.split('/');

					   return `<div id="car_goods" key = ${key}>
							<div id="goods_content">
								<div id="shop_checkbox" class='good${key}' data-id=${item.id} good_price=${item.todayPrice}>
								</div>
								<img src="./src/img/${items[0]}/${items[1]}"/>
								<div id="good_name">
									<p class="goods_title">${item.productName}</p>
									<p>
										<span>数量：<i>${item.qty}</i></span>
										<span>尺寸：<i>如图</i></span>
										<span id="dele_icon" className= "iconfont icon-shanchu"></span>
									</p>

									<p id="add_del">￥ <span id="cart_price">${item.todayPrice}</span>
										<span id="add_count">
											<button class="delCount" key='good${key}'> - </button>
											<input type="text" value="1" class="numberValue"/>
											<button class="addCount" key='good${key}'> + </button>
										</span>
									</p>
								</div>
							</div>
						</div>`;
			}).join('');
		}

		var html = {__html:text};
        return <div dangerouslySetInnerHTML = {html}></div>; 
	}

	render(){
		return(
			<div>
				<div id = "car_title">
					<span id = "shop_checkbox" className = "storeSelect" onClick = {this.changeSelect}>
					<b className="shopName"></b>
					</span>
					<span className = "iconfont icon-dianpu">
					</span>
					<span>哈尼哈尼仓储店</span>
					<span>待付款</span>
				</div>
				<div id = "eventSend">
					{	
						this.goodsUpdate()
					}
				</div>
				<h3>已经到最后</h3>
				<div>
					<ul className="carlist_count">
						<li>
							<span id="shop_checkbox" onClick={this.checkAll}></span>
							<span>全选</span>
						</li>
						<li>
							<div className="yunFei">
								<b>合计:<i>￥<span>{this.props.totalPrice.status}</span></i></b>
								<b>不含运费</b>
							</div>
							<div className="jeSuan">
								<button>
									<span onClick={this.routerUrl}>结算(<span>{this.props.totalPrice.number}</span>)</span>
								</button>
							</div>
						</li>
					</ul>
				</div>

			</div>
		)
	}
}


const getState=(state) => {
	return {
		msg:state.carlistGoods.response,
		carlistCount:state.carlistNum,
		dataChange:state.dataCb,
		countPrice:state.carPrice,
		totalPrice:state.Price,
		ajaxStatus:state.id
	}
}

export default connect(getState,carlist_action)(Car_goods);
