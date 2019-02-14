import React from 'react';
export default class Homelist extends React.Component{
    render(){
        return <div className='main'>
            <ul>
                <li>
                    <i className='iconfont icon-shuben1'></i>
                    <span>教材同步</span>
                </li>
                <li>
                    <i className='iconfont icon-huaban'></i>
                    <span>试题试卷</span>
                </li>
                <li>
                    <i className='iconfont icon-book'></i>
                    <span>知识点</span>
                </li>
                <li>
                    <i className='iconfont icon-zhuanji'></i>
                    <span>专辑</span>
                </li>
                <li>
                    <i className='iconfont icon-shuben'></i>
                    <span>中考</span>
                </li>
                <li>
                    <i className='iconfont icon-home'></i>
                    <span>名校资源</span>
                </li>
                <li>
                    <i className='iconfont icon-shoujichongzhi'></i>
                    <span>充值</span>
                </li>
                <li>
                    <i className='iconfont icon-shu'></i>
                    <span>书城</span>
                </li>
            </ul>
        </div>
    }
}