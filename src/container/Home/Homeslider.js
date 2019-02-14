import React from 'react';
import ReactSwipe from 'react-swipe';
export default class Homeslider extends React.Component{
    render(){
        return <div className='container'>
            <ReactSwipe className="carousel" swipeOptions = {{continuous:true,auto:2000}} >
              <div><img src="http://script.zxxk.com/img/gkelfx190108.jpg" alt=""/></div>
              <div><img src="http://script.zxxk.com/img/gkyiyuezhidao190102.jpg" alt=""/></div>
              <div><img src="http://script.zxxk.com/img/gzqmzt190108.jpg" alt=""/></div>
              <div><img src="http://script.zxxk.com/img/0102-173269.jpg" alt=""/></div>
              <div><img src="http://script.zxxk.com/img/0111-174651.jpg" alt=""/></div>
            </ReactSwipe>
        </div>
    }
}