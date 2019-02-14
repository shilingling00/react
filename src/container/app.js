import React from 'react';
import Nav from '../component/nav/nav';
export default class App extends React.Component{
    render(){
        return <div>
            {this.props.children}
            <Nav></Nav>
        </div>
    }
}