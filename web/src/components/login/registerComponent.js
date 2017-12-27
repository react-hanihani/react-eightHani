import React from 'react'
import PropTypes from 'prop-types';
import http from '../../utils/httpServer'
import { Router, Route, hashHistory } from 'react-router';
import BacktrackComponent from '../backtrack/backtrackComponent.js'
import './login.scss'

export default class registerComponent extends React.Component{
    goLogin(){
        hashHistory.push('/login');
    }
     onKeyup = (e) => {
        e.keyCode === 13 && this.register()
    }
    register(){
        var phone = document.querySelector('#registerPhone').value;
        var password = document.querySelector('#registerPw').value;
        var errmsg = document.querySelector('#errmsg .err-msg');
        if(!/^1[34578]\d{9}$/.test(phone)){
            errmsg.innerText = '！手机号码不合法';
            return false;
        }
        if(!/^[a-zA-Z\d]{5,31}$/.test(password)){
            errmsg.innerText = '！密码必须6-32位数字或字母';
            return false;
        }
        
        if(phone&&password){
            http.post('login.php',{phone:phone}).then(res => {
                   if(res.length == 1){
                        errmsg.innerText = '！该用户已经注册过，即将跳往登陆';
                        setTimeout( ()=>{
                            hashHistory.push('/login');
                        },2000)
                         
                    }else{
                        http.post('register.php',{phone:phone,password:password}).then(res => {
                            if(res){
                                errmsg.innerText = '！注册成功，即将跳转到首页';
                                setTimeout( ()=>{
                                    hashHistory.push('/');
                                },2000)
                            }else{
                                errmsg.innerText = '！注册失败，请重新注册';
                            }
                           
                        }).catch(error => {
                            console.log(error)
                        })   
                    }
            }).catch(error => {
                console.log(error)
            })
        }
    }
    render(){
        return (
    <div className = 'loginMain' >
        <div>
            <span style={{marginLeft:'10px',color:'red'}} onClick={this.goLogin.bind(this)}><i className="iconfont">&#xe60b;</i>&nbsp;返回</span>
            <div className="loginLogo"><img src="./src/assets/imgs/logo.gif"/></div>
        </div>
        <form id = "userForm" action = "#" method = "post" >
            <div id = "errmsg" className = "item item-tips" >
                <div className = "err-msg" > </div> 
                <input id = "msg" type = "hidden"/>
            </div> 
            <div className = "item item-username" > 
                <input id="registerPhone" className = "txt-input txt-username" placeholder = "请输入手机号码"  type = "text" pattern = "[0-9]*" />
            </div> 
            <div className = "item item-vcode" > 
                <div className = "vcode" > 
                    <input id="registerPw" className = "txt-input txt-password"  placeholder = "请输入6-32数字或字母" type = "password" /> 
                </div>
            </div>

            <div className = "item item-btns" >
                <a className = "btn-login" href = "javascript:;" onClick={this.register.bind(this)} onKeyUp={this.onKeyup.bind(this)}> 一键注册 < /a> 
                <div className ="xieyi">
                    <img src="./src/assets/imgs/checkboxed.png" className="checkboxedImg"/>
                    <span>&nbsp;我已阅读并同意</span><span style={{color:'red'}}>《哈尼哈尼用户协议》</span>
                </div>
            </div > 
            
        </form>
            
    </div>
            )
    }
}