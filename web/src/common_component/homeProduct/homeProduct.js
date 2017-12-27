import React from 'react'
import {connect} from 'react-redux'

import { hashHistory } from 'react-router'

import * as HomeActions from '../../components/home/homeAction'



class HomeProduct extends React.Component{
	state = {
		
	}
	
	home(e){
		var id = e.target.parentNode.getAttribute('id')

		this.props.getHome(id)

		hashHistory.push('detail')
		
	}

	render(){

			var a = this.props.box[0];
			var b = this.props.box[1];
			var shows;
			if(!this.props.datasets){
				shows = [];
			}
			shows = this.props.datasets.slice(a,b);

		return (
			<div className="showBox">
				<ul className="show" onClick={this.home.bind(this)}>
				{
					shows.map((item)=>{
						
						return <li id= {item.id} key={item.id}>
								<img src={"src/img/"+item.imgUrl} />
								<span className="showTitle">{item.productName.slice(0,12)}</span>
								<span className="showPrice">{item.todayPrice}</span>
							</li>
					})
				
				}
					
				</ul>
			</div>
		)
	}
}


const homeState = function(state){
	// console.log('homeProduct',state)
	return {
		datasets: state.homeReducer.response || []
	}
}


export default connect(homeState, HomeActions)(HomeProduct)

