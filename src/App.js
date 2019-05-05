import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person.js';



const app = props => {
 const [personsState, setPerson] = useState({
    persons:[
    {name:'Max', age:18},
    {name:'Manu', age:29},
    {name:'Stephanie', age:26}
  ]})

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>this is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  );
  //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this work now?'))
}

export default app;

state={
  persons:[
    {name:'Max', age:18},
    {name:'Manu', age:29},
    {name:'Stephanie', age:26}
  ]
}

switchNameHandler = () => {
  //console.log('Was clicked');
  //this.state.persons[0].name= 'Maximilian';
  this.setState({
    persons:[
      {name:'Maximilian', age:18},
      {name:'Manu', age:29},
      {name:'Stephanie', age:27}
    ]
  })
}