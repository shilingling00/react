import React from 'react';
export default class Choice extends React.Component{
    render(){
        return <div className='choice'>
            <div className="title">
                <span className="lefttext">精选专辑</span>
                <span className="righttext">
                    <span>查看全部</span>
                    <i> > </i>
                </span>
            </div>
            <ul className='choicelist'>
                <li>
                    <img src="http://img.zxxk.com/2019-1/ZXXKCOM20190107103243526330.jpg" alt=""/>
                    <span>2019中考数学新导向复习课...</span>
                </li>
                <li>
                    <img src="http://img.zxxk.com/2019-1/ZXXKCOM20190107103243526330.jpg" alt=""/>
                    <span>2019中考数学新导向复习课...</span>
                </li>
                <li>
                    <img src="http://img.zxxk.com/2019-1/ZXXKCOM20190107103243526330.jpg" alt=""/>
                    <span>2019中考数学新导向复习课...</span>
                </li>
            </ul>
        </div>
    }
}