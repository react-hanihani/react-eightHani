import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,Link} from 'react-router'
import {connect} from 'react-redux'
import MineTop from './minecomponent/mineTop'
import MineOrder from './minecomponent/mineOrder'
import PropTypes from 'prop-types';
//import * as mineAction from './mineAction'
import './mine.scss'

import Bottom from '../../common_component/bottom_tab'

export default class MineComponent extends React.Component{
    state = {
           minetelephone : localStorage.getItem('user1') || ''
        }
    componentDidMount(){
        if(this.state.minetelephone == ''){
            hashHistory.push('/login'); 
        }
    }

    shouye(){
        hashHistory.push('/')
    }
    render(){
        
        return(
            <div className="mine">
                <div className="mine_header">
                    <span onClick={this.shouye.bind(this)}><img src="src/assets/imgs/message.png"/></span>
                    <span>我的</span>
                    <span><img src="src/assets/imgs/setting.png"/></span>
                </div>
                <ul className="mine_nav">
                    <li><Link to="/minetop">
                        <div className="mine_person">
                            <span><img src="src/assets/imgs/default.png"/></span>
                            <span className="mine_phone"><b>{this.state.minetelephone}</b><img src="src/assets/imgs/level1.png"/></span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                        <p style={{'height':'15px','background':'rgb(245, 248, 250)'}}></p>
                    </Link></li>
                    <li><Link to="/mineorder">
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/order.png"/></span>
                            <span className="mine_center">全部订单</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                        <div className="mine_order">
                            <span><img src="src/assets/imgs/wait.png"/>待付款</span> 
                            <span><img src="src/assets/imgs/delivery.png"/>待付款</span> 
                            <span><img src="src/assets/imgs/wait_delivery.png"/>待付款</span> 
                            <span><img src="src/assets/imgs/evaluate.png"/>待付款</span> 
                            <span><img src="src/assets/imgs/customer.png"/>待付款</span> 
                        </div>
                        
                    </Link></li>
                </ul>
                <ul className="mine_ul">
                    <li>
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/tick_center.png"/></span>
                            <span className="mine_center">领券中心</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/payment.png"/></span>
                            <span className="mine_center">我的返利</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/myeval.png"/></span>
                            <span className="mine_center">我的评价</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/wallet.png"/></span>
                            <span className="mine_center">我的钱包</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/local_sm.png"/></span>
                            <span className="mine_center">本地说明</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/certification.png"/></span>
                            <span className="mine_center">实名认证</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/custom.png"/></span>
                            <span className="mine_center">客服详情</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style" style={{'borderBottom':'1px solid #ccc'}}>
                            <span><img src="src/assets/imgs/about_hani.png"/></span>
                            <span className="mine_center">关于哈尼</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                </ul>
                <Bottom></Bottom>
            </div>
        )
    }
}