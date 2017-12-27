
import Spinner from '../../spinner/lzspinnerComponent'
import '../../spinner/lzspinner.scss'


import React from 'react'
import './payNav.scss'

class PayNav extends React.Component{
	state={
		show:false,
	}

	pyOrder=()=>{
		this.setState({show:true});
		setTimeout(()=>{
			this.props.payOrder();
			this.setState({show:false});
		},2000)
		clearTimeout();
	}

	render(){
		
		return(
			<div className="pay_nav">
				<Spinner show={this.state.show}/>
				<div>
					<span>合计:<i>￥</i><i className="payTotal">{this.props.Prices}</i></span>
					<span>含运费</span>
				</div>
				<div>
					<button onClick={this.pyOrder}>支付订单</button>
				</div>
			</div>
			)
	}
}

export default PayNav;