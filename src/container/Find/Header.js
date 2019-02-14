import React from 'react';
export default class Header extends React.Component{
    render(){
        return <div className='header'>
            <div className='logo'>
                <img src="http://zxxkstatic.zxxk.com/MCdn//2.0/img/ui_logo.png" alt=""/>
            </div>
            <div className='select'>
                发现
            </div>
        </div>
    }
}