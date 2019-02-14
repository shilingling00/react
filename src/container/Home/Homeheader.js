import React from 'react';
import {withRouter} from "react-router-dom";

 class Homeheader extends React.Component{
    render(){
        return <div className='header'>
            <div className='logo'>
                <img src="http://zxxkstatic.zxxk.com/MCdn//2.0/img/ui_logo.png" alt=""/>
            </div>
            <div className='select'>
                <span>初中</span>
                <span>·</span>
                <span>语文</span>
                <i className='iconfont icon-ico_arrows_unfold'></i>
            </div>
            <div className='search'><i className='iconfont icon-sousuo' onClick={()=>{this.props.history.push('/login')}}></i></div>
        </div>
    }
}
export default withRouter(Homeheader)