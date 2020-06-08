import React, { Component } from 'react'
import BucketListItem from './BucketListItem'
import PropTypes from 'prop-types';
export class BucketList extends Component {
    
    render() {
        return (this.props.bucketList.map((bucketListItem => 
            <BucketListItem key = {bucketListItem.id} markComplete = {this.props.markComplete} bucketListItem = {bucketListItem} delete = {this.props.delete}/>
        ))

            
        )
    }
}

BucketList.propTypes = {
    BucketList: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}
export default BucketList