import React from 'react';
import Loginheader from "./Loginheader";
import './index.css'
import Lines from "../../component/Item/Lines";
import Grayline from "../../component/grayline/Grayline";
export default class User extends React.Component{
    render() {
        let ary=['info','property']
        console.log(this.props);
        return <div>
            <Loginheader/>
            <Lines onClick={()=>{this.props.history.push('/user/info')}}/>
            <Grayline/>
            <Lines/>
            <Lines/>
            <Grayline/>
            <Lines/>
            <Lines/>
            <Lines/>
            <Grayline/>
            <Lines/>
            <Grayline/>
            <Lines/>
        </div>
    }
}