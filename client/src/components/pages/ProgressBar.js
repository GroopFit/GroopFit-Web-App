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
    const color_array = ["blue", "white", "purple", "green"];
    let found = false;
    for (let i = 0; i < 4; i++) {
        if (color_array[i] == this.props.color) {
            found = true;
            break;
        }
    }
    
    let color = "";
    if (!found) {
        color = "white";
    }
    else {
        color = this.props.color;
    }
       return <div className="container">
           {/* <h1 className="title-text">Progress Bar</h1> */}
           <div className="skill-box">
               <span className="title">Running</span>
               <div className={"skill-bar"} style={{width: this.props.percentage}}>
                   <span className={"skill-per"} style = {{background: color}}>
                       <span className="tooltip">{this.props.percentage}</span>
                       <span className="percentages">0% 20% 40% 60% 80% 100%</span>
                   </span>
               </div>           
           </div>
       </div>
   }
}

export default ProgressBar;