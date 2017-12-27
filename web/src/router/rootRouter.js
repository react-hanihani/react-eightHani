import React from 'react'
import {Router, Route, hashHistory,IndexRoute} from 'react-router'

import AppComponent from '../components/app/appComponent'
import ProductsComponent from '../components/products/productsComponent'
import HomeComponent from '../components/home/homeComponent'
import Goodslist from '../components/goodslist/goodslistComponent.js'
import Classify from  '../components/classify/classifyComponent.js'
import DetailView from '../components/detail/detailComponent.js'
import Carlist from '../components/carlist/Cart'
import Login from '../components/login/loginComponent'
import Register from '../components/login/registerComponent'
import Mine from '../components/mine/mineComponent'
import MineTop from '../components/mine/minecomponent/mineTop'
import MineOrder from '../components/mine/minecomponent/mineOrder'
import SearchComponent from '../components/home/searchComponent'
import Payment from '../components/carlist/Payment'
import AddPlace from '../components/carlist/addPlace'



export default (
    <Route path="/" component={AppComponent}>
        <IndexRoute component={HomeComponent}/>
        <Route path="/search" component={SearchComponent}></Route>
        <Route path="products" component={ProductsComponent}></Route>
        <Route path="goodslist" component={Goodslist}></Route>
        <Route path="classify" component={Classify}></Route>
        <Route path='detail' component={DetailView}></Route>
        <Route path="/carlist" component={Carlist}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/mine" component={Mine}></Route>
        <Route path="/minetop" component={MineTop}></Route>
        <Route path="/mineorder" component={MineOrder}></Route>
        <Route path="payment" component={Payment}></Route>
        <Route path="addPlace" component={AddPlace}></Route> 
    </Route>
)