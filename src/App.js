import React, { Component } from "react";
import AddTask from "./AddTask";
import "./App.css";

class App extends Component {
  state = {
    taskName: "",
    priority: false,
    date: "",
  };
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(value);

    if (name === "taskName") this.setState({ [name]: value });
    if (name === "priority") this.setState({ [name]: !this.state.priority });
    if (name === "date") this.setState({ [name]: value });
  };
  componentDidMount() {
    this.currentDate = new Date();
    this.setState({
      date: `${this.currentDate.getFullYear()}-${this.currentDate.getMonth()}-${this.currentDate.getUTCDate()}`,
    });
  }
  render() {
    return <AddTask change={this.handleChange} state={this.state} />;
  }
}
export default App;
