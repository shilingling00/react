import React from 'react';
import './index.css';
import Header from './Header'
import Teaching from './Teaching'
export default class Sort extends React.Component{
    render(){
        let style={
            margin:'44px 0 0 0'
        }
        return <div className='sort'>
            {/*<p>1+1=
                <input type="text"/>
            </p>*/}
            <Header/>
            <Teaching  style={style.margin}/>
            <Teaching/>
            <Teaching/>
            <Teaching/>
        </div>
    }
}