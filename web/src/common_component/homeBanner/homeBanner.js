import React from 'react'
import {Carousel} from 'antd';


export default class HomeBanner extends React.Component{
	componentDidMount(){

	}
	Updating(){

	}
	
	render(){
		var content;
		if(typeof this.props.pic === 'string'){
			content = <img src={"/src/img/banner/"+this.props.pic} />
			
		}else if(Array.isArray(this.props.pic)){
			var picInstance =
			this.props.pic.map(function(item,idx){
				return <div key={idx}><img src={"/src/img/banner/"+item} /></div>
			})
			
			content =  <Carousel autoplay>
							{picInstance}
						</Carousel>
			
		}
		return (
			<div className="banner">
				{content}
			</div>
		)
	}
}
//				