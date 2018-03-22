import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button'
import ItemsList from './components/ItemsList/ItemsList';

class App extends Component {

  state = {
    buttons: [
      {id: 1, name:'FirstEndPoint', flag: false},
      {id: 2, name:'SecondEndPoint', flag: false},
      {id: 3, name:'ALL', flag: false}
    ],
    filterById: null,
    items: [],
    //allIds: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res=>res.json())
    .then(result=>{
      this.setState({
        items: [...this.state.items, ...result]
      });
    })

    fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
    .then(res=>res.json())
    .then(result=>{
      this.setState({
        items: [...this.state.items, ...result]
      });
    })    
  };
  handleFlag = (i, n, f) => {
    const {buttons} = this.state;
    const button = buttons.filter(button => (button.id === i));
    button[0].flag = !button[0].flag;
     this.setState({
       button: [...this.state.buttons, {id: button[0].id, name: button[0].n, flag: button[0].flag}],
       filterById: i 
       });
  };
  render() {
    const {items, filterById} = this.state;
    // let filteredItems;
    // if(filterById !== 1 && filterById !== 2) {
    //   filteredItems = items;
    // } else {
    //   filteredItems = items.filter((item) => (item.postId === filterById));
    // }

    const filteredItems = items.filter((item) => {
      if(filterById !== 1 && filterById !== 2) {
        return true;
      } else {
        return (item.postId === filterById);
      }
    })
    return(
      <div>
        <Button
          items={this.state.items} 
          buttons={this.state.buttons}
          handleClick={this.handleFlag}
        />
        <ItemsList 
            items={filteredItems}
            id={this.state.filterById}
        />
      </div>
      );
  }
}
export default App;