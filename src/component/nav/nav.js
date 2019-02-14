import React from  'react';
import {NavLink} from 'react-router-dom';
import './nav.css'
export default class Nav extends React.Component{
    render(){
        return <div className='tabs'>
            <NavLink to={'/'} exact={true}>
                <i className='iconfont icon-shoucang'></i>
                <span>首页</span>
            </NavLink>
            <NavLink to={'/sort'}>
                <i className='iconfont icon-tubiaolunkuo-'></i>
                <span>分类</span>
            </NavLink>
            <NavLink to={'/find'}>
                <i className='iconfont icon-faxian'></i>
                <span>发现</span>
            </NavLink>
            <NavLink to={'/user'}>
                <i className='iconfont icon-ziyuan'></i>
                <span>我的</span>
            </NavLink>

        </div>
    }
}