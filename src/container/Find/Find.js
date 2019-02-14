import React from 'react';
import Header from "./Header";
import Lines from "../../component/Item/Lines";
import './index.css'
import Grayline from "../../component/grayline/Grayline";
export default class Find extends React.Component{
    render(){
        let style={
            margin:'44px 0 0 0'
        }
        return <div className='find'>
            <Header/>
            <Lines style={style.margin} onClick={()=>{this.props.history.push('/login')}}/>
            <Lines/>
            <Lines/>
            <Grayline/>
            <Lines/>
            <Grayline/>
            <Lines/>
            <Lines/>
        </div>
    }
}