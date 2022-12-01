import React from "react";
import Circle from "./components/Circle";
import "./components/style.css";
import  Personal from "./components/Personal.js";
import Goals from "./components/Goals.js";
import Account from "./components/Account.js";
import Fitness from "./components/Fitness.js";
// import {connect}from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circle: 0,   //circle indicates which circle user is on. (the current page)
      arr: [],
      width: 0,
      FormTitle: ['Create Your Account','Personal Information','Fitness Logistics','Goals'],
      username: "",
      email: "", 
      pass: "",
      firstName: "",
      lastName: "",
      bday: "",
      age: 0,
      height: 0,
      weight: 0,
      goalWeight: 0,
      goal: ""
    };
  }
  

  PopulateArray = () => {
    this.state.arr = [];
    for (let i = 0; i < 4; i++) {
      // console.log("i=",i);
      // console.log(this.state.circle);
      this.state.arr.push(<Circle key={i} className={i<=this.state.circle?"circle active":"circle"} num={i}>{i}</Circle>);
    }
    this.state.width = 100/(3)*this.state.circle;
  }

  PrevSlide = () => {
    if (this.state.circle > 0) {
      this.setState((prevState)=>({ circle: prevState.circle - 1 }));
    }
    if(this.state.circle == 3){
      document.querySelector('.next').classList.remove('hidden');
      document.querySelector('.submit').classList.add('hidden');
    }
  }

  NextSlide = () => {
    if (this.state.circle < 3){
      this.setState((prevState) => ({ circle: prevState.circle + 1 }));
    }
    if (this.state.circle == 2){
      console.log("hello");
      document.querySelector('.next').classList.add('hidden');
      document.querySelector('.submit').classList.remove('hidden');
    }
  };

  PageDisplay = () => {
    if (this.state.circle == 0){
      return <Account />;
    }else if (this.state.circle == 1){
      return <Personal />;
    }else if (this.state.circle == 2){
      return <Fitness />;
    }else{
      return <Goals />;
    }
  };
  
  submitting=()=>{
    // Final steps after you submit
  }

  render() {
    this.PopulateArray(); 
    return (
      <div className="container">
        <div className="content">
          <div className="progressbar">
            <div className="progress" style={{width:this.state.width+"%"}}></div>
            {this.state.arr}
            
          </div>
          <div className="FormContent">
            <div className="header">{this.state.FormTitle[this.state.circle]}</div>
            <div className="body">
              {this.PageDisplay()}
            </div>
            <div className="button">
              <button className="prev btn" onClick={()=>{this.PrevSlide()}}>prev</button>
              <button className="next btn" onClick={()=>{this.NextSlide()}}>next</button>
              <button className="submit btn hidden" onClick={()=>{this.submitting()}}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;

