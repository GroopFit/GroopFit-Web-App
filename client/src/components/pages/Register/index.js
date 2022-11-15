import React from "react";
import Circle from "./components/Circle";
import "./components/style.css";
// import {connect}from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      age: "",
      circle: 0,
      arr: [],
      width: 0,
    };
  }

  populateArray = () => {
    this.state.arr = [];
    for (let i = 0; i < 4; i++) {
      console.log("i=",i);
      console.log(this.state.circle);
      this.state.arr.push(<Circle key={i} className={i<=this.state.circle?"circle active":"circle"} num={i}>{i}</Circle>);
    }
    this.state.width = 100/(3)*this.state.circle;
  }

  prevslide = () => {
    if (this.state.circle > 0) {
      this.setState((prevState)=>({ circle: prevState.circle - 1 }));
    }
  }
  nextslide = () => {
    if (this.state.circle <3){
      this.setState((prevState) => ({ circle: prevState.circle + 1 }));
    }
  };
  

  render() {
    this.populateArray(); 
    return (
      <div className="container">
        <div className="content">
          <div className="progressbar">
            <div className="progress" style={{width:this.state.width+"%"}}></div>
            {this.state.arr}
            {console.log(this.state.arr)}
            
          </div>
          <div className="button">
            <button className="prev btn" onClick={()=>{this.prevslide()}}>prev</button>
            <button className="next btn" onClick={()=>{this.nextslide()}}>next</button>
          </div>
        </div>
        <p>{this.state.circle}</p>
      </div>
    );
  }
}
export default Register;

