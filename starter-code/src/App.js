import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'




class App extends Component {

  state = {
    contacts:contacts.splice(0,5)
  }

  showContact = () => {
    let list = this.state.contacts.map((contact,i) => {
      return (
        <tr key={i}>
        <td> <img src={contact.pictureUrl} width="100px"></img></td>
        <td><p>{contact.name}</p></td>
        <td>{contact.popularity}</td>
        <td><button onClick={this.delete(index)}>delete</button></td>
        </tr>
      )
    })
    return list;
  }

addRandom =() =>{
  let randomContact = contacts[Math.floor(Math.random()*contacts.length)];
  const contactsCopy = [...this.state.contacts];
  contactsCopy.push(randomContact)
  this.setState({
    contacts:contactsCopy
  })
}

sortByName =()=>{
  
  const contactsCopy = [...this.state.contacts];

  contactsCopy.sort(function(a,b){
    var NameA=a.name.toLowerCase(), NameB=b.name.toLowerCase();
    if (NameA<NameB)
      return -1
    if(NameA > NameB)
      return 1
    // return 0
    })
    this.setState({
      contacts: contactsCopy
  }) 
}


sortByPop =()=>{
  const contactsCopy = [...this.state.contacts];

  contactsCopy.sort(function(a,b){
    var popA = a.popularity , popB =b.popularity;
    if (popA < popB)
      return -1
    if (popA > popB)
      return 1
    // return 0
  })
  this.setState({
    contacts:contactsCopy
  })
}


delete =()=>{
  const contactsCopy = [...this.state.contacts];
  contactsCopy.splice(index,1);
  this.setState = {
    contacts:contactsCopy
  }
}


 
 
  render() {
    return (
      <div className="App"  >
        
        
 
          <table>
         
           <tr>
             <th></th>
             <th><h1>IronContact</h1></th>
             <th></th>
           </tr>
           <tr>
             <td>    <button onClick={this.addRandom}>add Random</button> </td>
             <td> <button onClick={this.sortByName}>Sort by name</button> </td>
             <td><button onClick={this.sortByPop}>Sort by popularity</button> </td>
           </tr>
        
           <tr>
             <th>Picture</th>
             <th>Name</th>
             <th>popularition</th>
           </tr>
          {this.showContact()}
         </table>

     
      </div>
    );
  }
 }

  
export default App;
