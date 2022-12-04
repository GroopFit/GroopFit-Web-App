import React from 'react';

class Circle extends React.Component{
  render(){
    return(
      <div className={this.props.className}>{this.props.num}</div>
    )
  }
};
export default Circle