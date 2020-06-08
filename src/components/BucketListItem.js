import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class BucketListItem extends Component {
    getStyle =() => {
        return {
          textDecoration: this.props.bucketListItem.completed ? 'line-through' : 'none'
        } 
    }
    render() {
        const {id, title} = this.props.bucketListItem
        return (<div style = {this.getStyle()}>
            <p><input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>{' '}{title}<button style ={btnStyle} onClick={this.props.delete.bind(this, id)}>x</button></p>
            </div>
        )
    }
}
const btnStyle ={
background: "#ff0000",
color: 'black',

width: '1.2rem',
borderRadius: '100%',
cursor:'pointer',
float: 'right',
fontSize: '1rem',
border: 'solid black 1.5px'

}

BucketListItem.propTypes = {
    bucketListItem: PropTypes.object.isRequired
}
export default BucketListItem