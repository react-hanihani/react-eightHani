import React from 'react'
import Backtrack from '../../common_component/backtrack/backtrackComponent.js'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import * as DetailActions from './detailAction.js'
import { Carousel,message, Button,Icon,Badge} from 'antd';

import './detailComponent.scss'

class DetailComponent extends React.Component{
    state = {
        count: 0,
        show: false,
    }
    componentDidMount(){
        var path = 'detail.php'
        this.props.getDateset(path,{id:this.props.id})
    }

    componentDidUpdate(){
        
        if(this.state.show){
            var number = this.state.count+1
            this.setState({count:number,show:false})
        }
    }


    myCarousel(){
        var product = this.props.dataParams
        if(product!=undefined){
            if(product.length){
                var imgurl = product[0].describle.split(',')
                var html =imgurl.map((item,index)=>{
                    return <div key={'detail'+index}><img src={"./src/img/"+item} /></div>
                })
            }
            
        }
        return html
    }

    myPrice(){
        var product = this.props.dataParams
        if(product!=undefined){
            if(product.length){
                var text = product.map((item)=>{
                    return `<p>${item.productName}</p>
                            <div>
                                <span>￥${item.todayPrice}</span>
                                <span>V1专享价</span>
                                <span>淘宝价：￥${item.originPrice}</span>
                            </div>
                            <p>商品售价：￥${item.originPrice}</p>
                    `
                })
            }
        }
        var html = {__html:text}
        return <div dangerouslySetInnerHTML={html}></div>
    }
    onChange(a,b,c,event){
    }

    buyCar(){
        this.setState({show:true})
        var product = this.props.dataParams[0]
        product.username='小明明'
        var url = 'buyCar.php'
        this.props.getBuyCar(url,product)
    }
        
    goumai(){
        hashHistory.push('carlist');
    }
    
    render(){
        return (
            <div className='detail_all'>
                <div className='detail_header'>
                    <Backtrack />
                    <span>商品详情</span>
                    <Icon type="select" />
                </div>
                <div className='detail_main' >
                    <div className='d_Carousel'>
                        <Carousel afterChange={this.onChange.bind(this)} ref='aa'>
                            {
                                this.myCarousel()
                            }
                        </Carousel>
                    </div>
                    <div className='d_details'>
                        {
                            this.myPrice()
                        }
                    </div>
                    <div className='safeguard'>
                        <ul>
                            <li><i style={{color:'#FED190'}} className='iconfont icon-zhengpin'></i><span style={{color:'#FED190'}}>正品保障</span></li>
                            <li><i style={{color:'#67DAA3'}} className='iconfont icon-pinpaishouquan'></i><span style={{color:'#67DAA3'}}>品牌授权</span></li>
                            <li><i style={{color:'#86D0FD'}} className='iconfont icon-icon'></i><span style={{color:'#86D0FD'}}>闪电发货</span></li>
                            <li><i style={{color:'#EE8A70'}} className='iconfont icon-peifu'></i><span style={{color:'#EE8A70'}}>理赔承担</span></li>
                        </ul>
                    </div>
                    <div className='introduction'>
                        <p><span>图片详情</span></p>
                        {
                            this.myCarousel()
                        }
                    </div>
                </div>
                <div className='detail_footer' >
                    <ul>
                        <li>
                            <Badge count={this.state.count}>
                                <Icon type="shopping-cart" />
                            </Badge>
                        </li>
                        <li><span onClick={this.goumai}>立即购买</span></li>
                        <li><span onClick={this.buyCar.bind(this)}>加入购物车
                        </span></li>
                    </ul>
                </div>
            </div>
            )
    }
}

const mapTostate = function(state){
    var _id;
    if(state.aa.id){
        _id=state.aa.id
    }
    else if(state.homeReducer.id){
        _id=state.homeReducer.id
    }
    return {
        id:_id ,
        shows:state.aa.shows,
        dataParams:state.detail.response,
        car_status:state.detail.carStatus
    }
}

export default connect(mapTostate,DetailActions)(DetailComponent)


