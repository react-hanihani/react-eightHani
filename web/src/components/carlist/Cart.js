import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory} from 'react-router'
import {connect} from 'react-redux'

import CarTop from './car_component/carTop'
import Cargoods from './car_component/car_goods'
import Bottom_tab from '../../common_component/bottom_tab'

// import Backtrack from '../../common_component/backtrack/backtrackComponent'

import * as carlist_action from './action/carlist_action'
import Payment from './Payment'
import addPlace from './addPlace'




var style = {marginTop:'1.333333rem'}



class Cart extends React.Component{

	state={
		pageName:'cart',
		delTitle:'删除',
		topTitle:'购物车',
		usename:0,
		id:2,
		pay:0,
		gdCar:1,
	}

	componentDidMount(){
		this.ajaxMsg({username:'小明明'});
		this.props.car_gblock('classify');
	}

	ajaxMsg=(parma)=>{
			console.log(parma)
		if(parma){
			this.props.msg1(parma);
			
		}else{
			// this.props.msg1(this.state.id);

			var par = {username:'小明明'};
			this.props.msg1(par);
		}
	}

	render(){
		return(
			<div>
				<div id="Cartbox">
					<CarTop delTitle={this.state.delTitle} topTitle={this.state.topTitle}/>
					<h1 style={style}></h1>
					<Cargoods ajaxGetMsg = {this.ajaxMsg}/>
					<Bottom_tab/>
				</div>
			</div>
			)
	}
}

const getState=(state)=>{
	return {
		msg:state.carlistGoods,
		carlistUrl:state.carlistUrl,
		dataChange:state.dataCb
		
	}
}


export default connect(getState,carlist_action)(Cart);