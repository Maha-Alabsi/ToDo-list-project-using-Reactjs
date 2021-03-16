import React from 'react';
import Header from './Header';
import ToDoItem from './ToDoItem';
import Footer from './Footer';
import './../css/App.css';


function App() {
  const child = "Merna";
  const styleP={
    color:'white',
    backgroundColor:'red'
  }
  // const x="";
  // if(x){
  //    styleP.color="yellow"
  // }else{
  //    styleP.color="blue"
  // }

  // <p style={{backgroundColor:'blue'}}>Maha</p>
 
  return (
    <div>
      <Header />
    <div className="ToDoList">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
    <Footer />
    </div>
  );
}

export default App;
