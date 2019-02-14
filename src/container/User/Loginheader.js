import React from 'react';
import {NavLink} from "react-router-dom";
export default class Loginheader extends React.Component{
    render(){
        return <div className='headers'>
            <div className="link">
                <NavLink to={'/user/login'}>
                    <img src="http://zxxkstatic.zxxk.com//uc/images/userface/00001.jpg" alt=""/>
                    <span>请登录学科网</span>
                </NavLink>
            </div>
        </div>

    }
}