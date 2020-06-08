import React, {Component} from 'react';
import Header from './components/Header'
import './App.css';
import BucketList from './components/BucketList';
import AddBucketList from './components/AddBucketList'
import uuid from 'uuid';
import About from './components/pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  state = {
     bucketList : [
       { id:uuid.v4(),
        title: 'Megavalanche',
        completed: false,
      },
   { id:uuid.v4(),
     title: 'That fan parachuting shit',
     completed: false,
   },
   { id:uuid.v4(),
    title: 'Spear diving for lobster',
    completed: false,
  },
  { id:uuid.v4(),
    title: 'do vanlife',
    completed: false,
  },
  { id:uuid.v4(),
    title: 'travel out west',
    completed: false,
  },
  { id:uuid.v4(),
    title: 'Go see the Great Pyramids of Giza',
    completed: false,
  },
  { id:uuid.v4(),
    title: 'Mt Everest?',
    completed: false,
  },
  { id:uuid.v4(),
    title: 'Go ocean foraging on the west coast',
    completed: false,
  },
  { id:uuid.v4(),
    title: 'Salt Flats',
    completed: false,
  },
  { id:uuid.v4(),
    title: 'Hanging waterfalls',
    completed: false,
  }
  ]
}

markComplete = (id) => {
  this.setState({bucketList: this.state.bucketList.map(bucketListItem => {
    if(bucketListItem.id === id){
      bucketListItem.completed = !bucketListItem.completed
    }
    return bucketListItem;
  })})
}
delete = (id) => {
  this.setState({bucketList:[...this.state.bucketList.filter(bucketListItem => bucketListItem.id !== id)]})
}

addBucketList = (title) => {
  const newBucketListItem ={
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({bucketList: [...this.state.bucketList, newBucketListItem]})
}
render(){
  return (
    <Router>
      <div className="App">
        <div className="container">
        <Route exact path="/" render={props => (
          <React.Fragment>
          <Header />
          <AddBucketList  addBucketList = {this.addBucketList}/>
          <BucketList bucketList = {this.state.bucketList} markComplete = {this.markComplete} delete = {this.delete}/>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        
        </div>
        
      </div>
    </Router>
  );
}
}

export default App;
