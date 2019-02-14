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
            <NavLink to={'/lesson'}>
                <i className='iconfont icon-course'></i>
                <span>课程</span>
            </NavLink>
            <NavLink to={'/profile'}>
                <i className='iconfont icon-shoucang'></i>
                <span>收藏</span>
            </NavLink>
        </div>
    }
}