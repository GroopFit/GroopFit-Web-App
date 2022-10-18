import React from "react";
import { connect } from 'react-redux';
import * as AiIcons from "react-icons/ai";


class GroopLeaderboardElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            medal: "", 
          
        };
    }


    componentDidMount(){
        if(this.props.ranking === 1 ){ this.setState({medal: "gold"})}
        if(this.props.ranking === 2 ){ this.setState({medal: "silver"})}
        if(this.props.ranking === 3 ){ this.setState({medal: "bronze"})}

    } 

    getOrdinalIndicaror = (num) => {
        let lastDigit =  parseInt(String(num).slice(-1))

        if( lastDigit > 3) {
            return "th"
        } else {
            if(lastDigit === 1){
                return "st"
            } else if (lastDigit === 2) {
                return "nd"
            } else {   return "rd" }
        }
    }

    

    render() {
        return  (
            <div className="leaderboard-element">
                <div className="leaderboard-element-first">
                    <div className="leaderboard-element-box flow-col">
                        { this.props.increase ? <AiIcons.AiOutlineCaretUp color={'#50c878'} fontSize={'1.0rem'} />   : <></> }
                        { this.props.decrease ? <AiIcons.AiOutlineCaretDown color={'#DC143C'} fontSize={'1.0rem'} /> : <></> }
                        { this.props.stagnant ? <AiIcons.AiOutlineLine color={'#888'} fontSize={'1.0rem'} />         : <></> }   
                        <div className="leadboard-old-place">
                            { this.props.stagnant ? "0" : this.props.positionChangeAmount }
                        </div>
                    </div>
                    <div className={`leaderboard-element-box box-45 ${this.state.medal}`}>  
                        { this.props.ranking + this.getOrdinalIndicaror(this.props.ranking)} </div>
                    <div className="leaderboard-element-box">
                    <img style={{border: this.state.medal === "" ? 'none' : 'inherit'}} className={`leaderboard-border-${this.state.medal}`} alt="" src={this.props.picture} />
                    <div style={{display: this.state.medal === "" ? 'none' : 'inherit'}} className="leaderboard-element-box-cirle flex center">
                        <div className={`leaderboard-element-box-cirle-inner flex center leaderboard-bg-${this.state.medal}`}>  { this.props.ranking} </div> 
                    </div>
                    </div>
                    <div className={`leaderboard-element-box ${this.state.medal}`}> {this.props.fullName} </div>
                </div>
                <div className="leaderboard-element-second">
                    <div className={`leaderboard-element-box ${this.state.medal}`}> {this.props.value + ' ' + this.props.unit }</div>
                </div>
            </div>
    )}
}

export default GroopLeaderboardElement;