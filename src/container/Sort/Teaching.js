import React from 'react';
import {NavLink, Route} from "react-router-dom";

export  default class Teaching extends React.Component{
    render(){
        let style={
            margin:this.props.style
        }
        return <div className="teach" style={style}>
            <div className="title">
                <span className='text'>教材同步:</span>
                <span className='more'> > </span>
            </div>
            <div className="grade">
                <NavLink to={'/sort/seven'} exact={true}>七年级</NavLink>
                <NavLink to={'/sort/seven'} exact={true}>七年级</NavLink>
                <NavLink to={'/sort/seven'} exact={true}>七年级</NavLink>
                <NavLink to={'/sort/seven'} exact={true}>七年级</NavLink>
                <NavLink to={'/sort/seven'} exact={true}>七年级</NavLink>
                <NavLink to={'/sort/seven'} exact={true}>七年级</NavLink>
                <NavLink to={'/sort/seven'} exact={true}>七年级</NavLink>
                <NavLink to={'/sort/seven'} exact={true}>七年级</NavLink>
            </div>
        </div>
    }
}