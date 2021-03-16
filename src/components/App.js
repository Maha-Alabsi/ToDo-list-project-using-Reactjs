import React from 'react';
import Header from './Header';
import todosData from './todoData';
import ToDoItem from './ToDoItem';
import Footer from './Footer';
import './../css/App.css';


// function App() {
//   //To make adding items more Dynamic
//   const toDoRender = todosData.map((item)=>{
//     return(
//     <ToDoItem key={item.id} text={item.text} status={item.completed}/>
//     );
//   });
//   return (
//     <div>
//       <Header />
//     <div className="ToDoList">
//          {toDoRender}
//     </div>
//     <Footer />
//     </div>
//   );
// }

//convert Function components into Class component
class App extends React.Component{
  constructor(){
    super();
    this.state = {
       toDo: todosData
    }
  }
  render(){
     //To make adding items more Dynamic
  const toDoRender = this.state.toDo.map((item)=>{
    return(
    <ToDoItem key={item.id} text={item.text} status={item.completed}/>
    );
  });
  return (
    <div>
      <Header />
    <div className="ToDoList">
         {toDoRender}
    </div>
    <Footer />
    </div>
  );
  }
}

export default App;
