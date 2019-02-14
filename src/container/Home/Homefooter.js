import React from 'react';
export default class Homefooter extends React.Component{
    render(){
        return <div className='footer'>
            <div className="first">
                <span>登陆</span>
                |
                <span>注册</span>
            </div>
            <div className="second">
                <span>PC版</span>
                |
                <span>开通学校服务</span>
                |
                <span>下载APP</span>
            </div>
            <div className="third">
                <span>学科网zxxk.com版权所有 京ICP备12013499号</span>
            </div>
        </div>
    }
}