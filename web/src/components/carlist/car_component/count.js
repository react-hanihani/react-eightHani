
import React from 'react'
import {Link,hashHistory} from 'react-router'
import {connect} from 'react-redux'


import * as carlist_action from '../action/carlist_action'
import './count.scss'




class CountComponent extends React.Component{
	state={
		checkAllNumber:0
	}

	routerUrl=()=>{
		var parmas = 'carlist';
		hashHistory.push('payment');

	}

	changeState=()=>{
		this.setState({checkAllNumber:++this.state.checkAllNumber});
		this.props.checkAllNumber(this.state.checkAllNumber);
	}

	render(){
		return (
			<div>
				<ul className="carlist_count">
					<li>
						<span id="shop_checkbox" onClick={this.changeState}></span>
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

			)
	}
}


const getState=(state)=>{
	return {
		msg:state.carlistGoods,
		countPrice:state.carPrice,
		totalPrice:state.Price,
		checkAll:state.checkAllNumber
	}
}

export default connect(getState,carlist_action)(CountComponent);