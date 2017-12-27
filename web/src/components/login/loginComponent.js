import React from 'react'
import {connect} from 'react-redux'
import http from '../../utils/httpServer'
import PropTypes from 'prop-types';
import { Router, Route, hashHistory } from 'react-router';
//import BacktrackComponent from '../backtrack/backtrackComponent.js'
import './login.scss'

export default class loginComponent extends React.Component {
    state = {
       phone:'',
       password:''
    }
    contextTypes: {
        router: React.PropTypes.object
    }
    gohome(){
        hashHistory.push('/'); 
    }
    goRegister(){
        hashHistory.push('/register');
    }
    handleLogin(){
        var phone = document.querySelector('#loginPhone').value;
        var password = document.querySelector('#loginPw').value;
        var errmsg = document.querySelector('#errmsg .err-msg');
        if(phone&&password){
            http.post('login.php',{phone:phone,password:password}).then(res => {
                   if(res[0].length == 1){
                       //写进session
                       localStorage.setItem('user1',res[1])
                        //跳转到首页
                        hashHistory.push('/mine');
                    }else{
                        
                        errmsg.innerText = '！账号或密码错误';
                    }
                    
                }).catch(error => {
                })
        }
        
    }
  
   
    
    render() {
        return ( 
    <div className = 'loginMain' >
        <div>
            <p className="gotohome" onClick={this.gohome.bind(this)}><i className="iconfont">&#xe67f;</i></p>
            <div className="loginLogo"><img src="./src/assets/imgs/logo.gif"/></div>
        </div>
        <form id = "userForm"  method = "post" >
            <div id = "errmsg" className = "item item-tips" >
                <div className = "err-msg" > </div> 
                <input id = "msg" type = "hidden"/>
            </div> 
            <div className = "item item-username" > 
                <input id="loginPhone" className = "txt-input txt-username"  placeholder = "手机号码"  type = "text" pattern = "[0-9]*" />
            </div> 
            <div className = "item item-vcode" > 
                <div className = "vcode" > 
                    <input id="loginPw" className = "txt-input txt-password"  placeholder = "请输入密码" type = "password" /> 
                </div>
            </div>

            <div className = "item item-btns" >
                <a className = "btn-login" href = "javascript:;" onClick={this.handleLogin.bind(this)}> 登录 < /a> 
            </div > 
        </form>
            <div className = "item item-btns item-register" >
                <a className = "btn-register" href = "javascript:;" onClick={this.goRegister.bind(this)}> 注册 < /a> 
            </div >
    </div>
        )
    }
}