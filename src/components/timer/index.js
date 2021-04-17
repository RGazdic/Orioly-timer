import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {

  constructor(props){
    super(props);
    this.state = {
      timer : parseInt(this.props.initial),
      run : true,
      buttonTitle : "Stop Timer"
    }
    this.stopTimer = this.stopTimer.bind(this);

  }

  tick(){
    if(this.state.run){
      this.setState({
        timer : this.state.timer>0? this.state.timer - 1 : 0
      })
    }
  }

 componentDidMount(){
   this.interval = setInterval(() => this.tick(),1000)
 }

 stopTimer(){
   this.setState({
     run : !this.state.run,
     buttonTitle : this.state.run? "Start Timer" : "Stop timer"
   })
 }

  render() {
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
         <div className="timer-value" data-testid="timer-value">{this.state.timer}</div>
         <button className="large" data-testid="stop-button" onClick={this.stopTimer}>{this.state.buttonTitle}</button>
      </div>
    );
  }
}

