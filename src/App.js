import React from 'react';
import TodoItem from './TodoItem'

const toggleItemAtIndex = (items,indexToToggle)=>{
  const item = items [indexToToggle];
  item.completed = !item.completed;
  return items;
}

class App extends React.Component{
  constructor(){
    super()
    this.state = {items: [
      {description: 'Go to Gym',completed: true},
      {description: 'Call to Sara',completed: false},
      {description: 'Email Kevin',completed: true},
      {description: 'Complete linkedin profile',completed: false},
      {description: 'Pay electricity bill',completed: false}
    ]}
  }

  onToggleItemAtIndex = (index) => {
    this.setState((prevState)=>{
      let items = prevState.items;
      items = toggleItemAtIndex(items,index);
      return { items }
    })
  }

  render(){
    const items = this.state.items;

    return(
      <div className="App">
      {
        items.map((item,index)=>(
          <TodoItem key={index}
          description={item.description}
          completed={item.completed}
          onToggle={()=>this.onToggleItemAtIndex(index)}
          />
        ))
      }
      </div>
    )
  }
}

export default App




