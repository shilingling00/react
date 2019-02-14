import React from 'react';
import Homeheader from './Homeheader'
import Homeslider from './Homeslider';
import Homelist from './Homelist';
import Choice from './Choice';
import School from './School';
import Video from './Video';
import Homefooter from './Homefooter';
import './index.css'
export default class Home extends React.Component{
    render(){
        return <div className='homes'>
            <Homeheader/>
            <Homeslider/>
            <Homelist/>
            <Choice/>
            <School/>
            <Video/>
            <Homefooter/>
        </div>
    }
}