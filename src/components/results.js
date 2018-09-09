import React, { Component } from 'react';

const a = 0;
const b = 1;
const c = 2;

class Results extends Component {
   

  votesAngularInPercent() {
    if (this.props.angular) {
      return (this.props.angular/ (this.props.angular + this.props.react + this.props.vuejs)) * 100
    } else {
      return 0
    }
  }
  votesReactInPercent() {
    if (this.props.react) {
      return (this.props.react / (this.props.angular+ this.props.react + this.props.vuejs)) * 100
    } else {
      return 0
    }
  }

  votesVuejsInPercent() {
    if (this.props.vuejs) {
      return (this.props.vuejs / (this.props.angular+ this.props.react + this.props.vuejs)) * 100
    } else {
      return 0
    }
  }
  votesAngularInPercentStyle() {
    return {
      width: this.votesAngularInPercent()+'%'
    }
  }
  votesReactInPercentStyle() {
    return {
      width: this.votesReactInPercent()+'%'
    }
  }
  votesVuejsInPercentStyle() {
    return {
      width: this.votesVuejsInPercent()+'%'
    }
  }
  render() {

    //const voteAng= this.props.liveVoting[a].angular + 1;
    return (
      <div>
        <span className="label label-danger">Angular: {this.votesAngularInPercent().toFixed(2) + '%'}</span>
       
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={this.votesAngularInPercentStyle()}></div>
         <h1>{this.props.react}</h1>
        </div>
        
        
        <span className="label label-info">React: {this.votesReactInPercent().toFixed(2) + '%'}</span>
        
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-info" style={this.votesReactInPercentStyle()}></div>
        </div>
        
      
        <span className="label label-success">Vue.js: {this.votesVuejsInPercent().toFixed(2) + '%'}</span>
      
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-success" style={this.votesVuejsInPercentStyle()}></div>
        </div>
      </div>
    )
  }
}

export default Results;