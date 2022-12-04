import React from "react";
import Circle from "./components/Circle";
import "./components/style.css";
import  Personal from "./components/Personal.js";
import Goals from "./components/Goals.js";
import Account from "./components/Account.js";
import Fitness from "./components/Fitness.js";
// import {connect} from 'react-redux';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circle: 0,   //circle indicates which circle user is on. (the current page)
      arr: [],
      width: 0,
      FormTitle: ['Create Your Account','Personal Information','Fitness Logistics','Goals'],

      // Account Form Data
      username: "",
      email: "", 
      pass: "",

      // Personal Form Data
      firstName: "",
      lastName: "",
      bday: "",

      // Fitness Form Data
      age: 0,
      height: 0,
      weight: 0,

      // Goals Form Data
      goalWeight: 0,
      goal: ""
    };
  }

  // When a user enters data into the form, this function will be called to update the state
  handleChange = (e)=>{
    const name = e.target.name
    this.setState(()=>({[name]: e.target.value}));  
  }

  // Populates the array with circles (for the progress progression on the top)
  PopulateArray = () => {
    this.state.arr = [];
    for (let i = 0; i < 4; i++) {
      this.state.arr.push(<Circle key={i} className={i<=this.state.circle?"circle active":"circle"} num={i}>{i}</Circle>);
    }
    this.state.width = 100/(3)*this.state.circle;
  }

  // When prev button is clicked, updates state to previous slide. 
  // If slide is at the last page, then must hide the 'submit' button and show the 'next' button 
  PrevSlide = () => {
    if (this.state.circle > 0) {
      this.setState((prevState)=>({ circle: prevState.circle - 1 }));
    }
    if(this.state.circle === 3){
      document.querySelector('.next').classList.remove('hidden');
      document.querySelector('.submit').classList.add('hidden');
    }
  }

  // When next button is clicked, updates state to next slide.
  // If slide is at the last page, then hide the 'next' button, and show the 'submit' button
  NextSlide = () => {
    if (this.state.circle < 3){
      this.setState((prevState) => ({ circle: prevState.circle + 1 }));
    }
    if (this.state.circle === 2){
      console.log("hello");
      document.querySelector('.next').classList.add('hidden');
      document.querySelector('.submit').classList.remove('hidden');
    }
  };

  // Depending on what slide the user is at, it will choose the form to display
  // Sends in the state and the handleChange function as props to the form component. 
  PageDisplay = () => {
    if (this.state.circle === 0){
      return <Account formData={this.state} handleChange={this.handleChange} />;
    }else if (this.state.circle === 1){
      return <Personal formData={this.state} handleChange={this.handleChange} />;
    }else if (this.state.circle === 2){
      return <Fitness formData={this.state} handleChange={this.handleChange} />;
    }else{
      return <Goals formData={this.state} handleChange={this.handleChange} />;
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
              <button className="prev btn" onClick={()=>{this.PrevSlide()}}>Prev</button>
              <button className="next btn" onClick={()=>{this.NextSlide()}}>Next</button>
              <button className="submit btn hidden" onClick={()=>{this.submitting()}}>Submit</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default Register;

