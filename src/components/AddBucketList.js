import React, { Component } from 'react'

export class AddBucketList extends Component {
state={
    title: ''
}
onChange =(e) => this.setState({title: e.target.value});
onSubmit= (e) =>{
    e.preventDefault();
    this.props.addBucketList(this.state.title);
    this.setState({title: ''});
}
    render(){ return(
                <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                    <input type='text' name='title' placeholder='Add something to bucket list...' style={{flex: '10', padding: '5px'}} value={this.state.title} onChange= {this.onChange}/>
                    <input type='submit' value='Submit' className='btn' style= {{flex:1}}
                    />



{/* adding isn't finished yet //find out tomorrow how to do it */}
                </form>
    )

    }
}

export default AddBucketList