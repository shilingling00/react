import React from 'react';
import {withRouter} from "react-router-dom";

class Header extends React.Component{
    render(){
        return <div className='header'>
            <div className='logo'>
                <img src="http://zxxkstatic.zxxk.com/MCdn//2.0/img/ui_logo.png" alt=""/>
            </div>
            <div className='select'>
             分类
            </div>
            <div className='search'><i className='iconfont icon-sousuo' onClick={()=>{this.props.history.push('/login')}}></i></div>
        </div>
    }
}
export default withRouter(Header)