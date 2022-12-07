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
    const color_array = ["blue", "white", "purple", "green", "grey"];
    let found = false;
    for (let i = 0; i < 5; i++) {
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
           <div className="skill-box">
               <span className="title">{this.props.type}</span>
               <div className={"skill-bar"} style={{width: this.props.percentage}}>
                   <span className={`skill-per progress-${color}-bg`}>
                       <span className="tooltip">{this.props.percentage}</span>
                       <span className="percentages">0% 20% 40% 60% 80% 100%</span>
                   </span>
               </div>           
           </div>
       </div>
   }
}

export default ProgressBar;