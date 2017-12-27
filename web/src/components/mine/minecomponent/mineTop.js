import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,Link} from 'react-router'
import '../mine.scss'
class MineTop extends React.Component{
    gomine(){
        hashHistory.push('/mine'); 
    }
    exitLogin(){
        localStorage.removeItem('user1');
        hashHistory.push('/mine'); 
    }
    state = {
           minetelephone : localStorage.getItem('user1') || ''
        }
    render(){
        var minetelephone = localStorage.getItem('user1');
        return(
            <div>
                <div className="minetop_header">
                    <i className="iconfont" onClick={this.gomine.bind(this)}>&#xe60b;</i>
                    <span>个人中心</span>
                    <span></span>
                </div>
                 <ul className="mine_ul" style={{'height':'500px'}}>
                    <li>
                        <div className="mine_style bb1" style={{'borderBottom':'1px solid #ccc'}}>
                            <span>宝宝资料</span>
                            <span className="mineTop_center">请完善宝宝资料</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style bb1" style={{'borderBottom':'1px solid #ccc'}}>
                            <span>个人资料</span>
                            <span className="mineTop_center">请完善个人资料</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style bb1" style={{'borderBottom':'1px solid #ccc'}}>
                            <span>手机号码</span>
                            <span className="mineTop_center">{this.state.minetelephone}</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style bb1" style={{'borderBottom':'1px solid #ccc'}}>
                            <span>地址管理</span>
                            <span className="mineTop_center">立即添加</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                    <li>
                        <div className="mine_style bb1" style={{'borderBottom':'1px solid #ccc'}}>
                            <span>修改密码</span>
                            <span><img src="src/assets/imgs/mt_right.png"/></span>
                        </div>
                    </li>
                </ul>
                <p className="exitLogin" onClick={this.exitLogin.bind(this)}>退出登录</p>
            </div>
        )
    }
}
export default MineTop;