import React from 'react';
import {NavLink} from "react-router-dom";
import './index.css'
export default class Lines extends React.Component{
    render() {
        let style={
            margin:this.props.style}
        return <div className="box" style={style}>
            <NavLink to={'/find/search'}>
                <i className='iconfont icon-sousuo'></i>
                <span className='text'>全网搜</span>
                <span className='more'> > </span>
            </NavLink>
        </div>
    }
}
