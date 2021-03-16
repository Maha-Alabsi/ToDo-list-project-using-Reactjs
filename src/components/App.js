import React from "react";
import Header from "./Header";
import todosData from "./todoData";
import ToDoItem from "./ToDoItem";
import Footer from "./Footer";
import "./../css/App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updateToDo = prevState.toDo.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        toDo: updateToDo,
      };
    });
    console.log(id);
  }
  render() {
    //To make adding items more Dynamic
    const toDoRender = this.state.toDo.map((item) => {
      return (
        <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
      );
    });
    return (
      <div>
        <Header />
        <div className="ToDoList">{toDoRender}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
