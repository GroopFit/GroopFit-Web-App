import React from "react";
import './styles.css';
import ApexCharts from "apexcharts";

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
}
   render () {
       return <div className="container">
           <h1 className="title-text">Progress Bar</h1>

           <div className="skill-box">
               <span className="title">Running</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">{this.props.percentage}</span>
                   </span>
               </div>           
           </div>
       </div>
   }
}

export default ProgressBar;