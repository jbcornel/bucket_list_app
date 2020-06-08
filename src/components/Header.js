import React, { Component } from 'react'
import {Link } from 'react-router-dom';

export class Header extends Component {
    
    render() {
        return (
            <header>
            <h1>Joe's Bucket List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
            </header>
        )
    }
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }
  
export default Header