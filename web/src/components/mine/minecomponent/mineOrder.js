import React from 'react'
import ReactDOM from 'react-dom'
import * as mineAction from '../mineAction'
import {connect} from 'react-redux'
import {Router,Route,hashHistory,Link} from 'react-router'
import '../mine.scss'
class MineOrder extends React.Component{
    gomine(){
        hashHistory.push('/mine'); 
    }
    state = {
           minetelephone : localStorage.getItem('user1') || ''
    }
    componentDidMount(){
            if(this.state.minetelephone == ''){
                hashHistory.push('/login'); 
            }
            
            var tab = document.getElementsByClassName('mineorder_tab')[0];
            var header = tab.firstElementChild.children;
            for(var i=0;i<header.length;i++){
                header[i].idx = i;
                header[i].onclick = function(){
                    var idx = this.idx;
                    for(var i=0;i<header.length;i++){
                        if(i===idx){
                            header[i].className = 'active';
                        }else{ header[i].className = '';}
                    }    
                }
            } 
            //初始化数据
            this.props.mineAll('order.php','0')
    }
    orderAll(){
        this.props.mineAll('order.php',"0")    
    }
    waitDelivery(){
        this.props.mineAll('order.php','0')
    }
    paied(){
        this.props.mineAll('order.php','1')
    }
    getKeys(item){
        var newObj = item ? Object.keys(item) : []
        return newObj
    }
    confirm(){
        if(confirm('确定取消订单？')){alert('取消订单成功')}
    }
    pay(){
        hashHistory.push('/mine');
    }
    render(){
        var dataOrder = this.props.mineorder || [];
        return(
            <div>
                <div className="minetop_header">
                    <i className="iconfont" onClick={this.gomine.bind(this)}>&#xe60b;</i>
                    <span>订单管理</span>
                    <span></span>
                </div>
                <div className="mineorder_tab">
                    <ul className="mineorder_ul">
                        <li className="active" id="orderAll" onClick={this.orderAll.bind(this)}>全部</li>
                        <li onClick={this.waitDelivery.bind(this)}>待付款</li>
                        <li onClick={this.paied.bind(this)}>待发货</li>
                        <li>待收货</li>
                        <li>待评价</li>
                    </ul>
                    <ol id="orderKinds">
                    {
                        dataOrder.map(function(obj, index){
                           
                        return (
                                <li key={'li' + index}>
                                    <p className="orderLi1">
                                        <span><i className="iconfont">&#xe623;</i>哈尼哈尼仓储店</span>
                                        <span style={{'color':'red'}}>待付款</span>
                                    </p>
                                    <div className="orderLi2">
                                        <img src={"src/img/"+obj.imgUrl} />
                                        <div className="ordername">
                                            <span className="ordername_name">{obj.productName}</span>
                                            <span className="colorsize">颜色:如图;尺寸:如图</span>
                                        </div>
                                        <span><b>{obj.todayPrice}</b>{'X'+obj.number}</span>
                                    </div>
                                    <div className="orderLi3">
                                        <span>
                                            <span className="orderPrice">{"实付:"+obj.todayPrice}</span>
                                            <span>共<b>{obj.number}</b>件商品</span>
                                        </span>
                                        <div>
                                            <button onClick={this.confirm}>取消订单</button>
                                            <button onClick={this.pay}>付款</button>
                                        </div>   
                                    </div>
                                </li>
                            )
                        }.bind(this))
                    }
                    </ol>
                </div>
                
            </div>
        )
    }
}
const mapToState = function(state){ 
    return {
        mineorder:state.mine.response || []
    }
}

export default connect(mapToState, mineAction)(MineOrder);
