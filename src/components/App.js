import React, { Component } from 'react';
import * as actionCreators from '../actions/actionCreators';
import '../App.css';
import angularLogo from '../angular.png';
import reactLogo from '../react.png';
import vueLogo from '../Vue.png';
import Logo from '../thesmartway.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Results from './results';

class App extends Component {
 

 
  

  render() {
    
   const angular= this.props.Votes.Votes[0].angular;
   const react= this.props.Votes.Votes[1].react;
   const vuejs= this.props.Votes.Votes[2].vuejs;
    
    /*angular={angular} vuejs={vuejs} react={react} */
    return (
      
      <div >
        <div className="jumbotron" style={{'textAlign': 'center'}}>
          <img src={Logo} height="96" alt="CodingTheSmartWay.com"></img>
          <h2>What is your favorite front-end development framework 2018?</h2>
          <h4>Click on the logos below to vote !</h4>
          <br />
          <div className="row">
            <div className="col-xs-offset-3 col-xs-2">
              <img src={angularLogo} height="96" alt="Angular" onClick={this.props.voteAngular.bind(null,0)}></img>
            </div>
            <div className="col-xs-2">
              <img src={reactLogo} height="96" alt="React" onClick={this.props.voteReact.bind(null,1)}></img>
            </div>
            <div className="col-xs-2">
              <img src={vueLogo} height="96" alt="Vue.js" onClick={this.props.voteVuejs.bind(null,2)}></img>
            </div>
          </div>
        </div>
        
        <Results  vuejs={vuejs} react={react} angular={angular}/>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators,dispatch);
}

function mapStateToProps(state) {
 return {
  Votes: state
 }
    
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
