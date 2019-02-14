import React from 'react';
export default class School extends React.Component{
    render(){
        return <div className='school'>
            <div className="title">
                <span className="lefttext">精选专辑</span>
                <span className="righttext">
                    <span>查看全部</span>
                    <i> > </i>
                </span>
            </div>
            <div className="source">
                <img src="http://img.zxxk.com/2017-2/ZXXKCOM201702171657116294689.jpg" alt=""/>
                <div className="text">
                    <span className='top'>中国人民大学附属中学</span>
                    <span className='bottom'>百强校共 <em>294</em>份资源</span>
                </div>

            </div>
            <ul className="schools">
                <li>
                    <span className='left'>101中学</span>
                    <span className='right'>277份</span>
                </li>
                <li>
                    <span className='left'>101中学</span>
                    <span className='right'>277份</span>
                </li>
                <li>
                <span className='left'>101中学</span>
                <span className='right'>277份</span>
            </li>
                <li>
                <span className='left'>101中学</span>
                <span className='right'>277份</span>
            </li>
                <li>
                <span className='left'>101中学</span>
                <span className='right'>277份</span>
            </li>
                <li>
                <span className='left'>101中学</span>
                <span className='right'>277份</span>
            </li>
                <li>
                <span className='left'>101中学</span>
                <span className='right'>277份</span>
            </li>
                <li>
                <span className='left'>101中学</span>
                <span className='right'>277份</span>
            </li>
            </ul>
        </div>
    }
}