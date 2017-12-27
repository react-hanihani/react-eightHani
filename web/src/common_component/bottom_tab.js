import React from 'react'
import {Component} from 'react'
import {Link} from 'react-router'


import './common_css/bottom_tab.scss'
class Bottom_Tab extends React.Component{
	render(){
		return (
				<div>
					<ul id="bottom_tab">
						<li>
							<Link to ="/">
								<span className="iconfont icon-shouye"></span>
								<span>首页</span>
							</Link>
						</li>
						<li>
							<Link to="/">
								<span className="iconfont icon-local"></span>
								<span className="local1">本地</span>
							</Link>
						</li>
						<li>
							<Link to="/classify">
								<span className="iconfont icon-fenlei"></span>
								<span>分类</span>
							</Link>
						</li>
						<li>
							<Link to="/carlist">
								<span className="iconfont icon-gouwuche1"></span>
								<span>购物车</span>
							</Link>
						</li>
						<li>
							<Link to="/mine">
								<span className="iconfont icon-WO"></span>
								<span>我</span>
							</Link>
						</li>
					</ul>
				</div>
			)
	}
}

export default Bottom_Tab;