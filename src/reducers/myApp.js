function Votes(state=[], action) {
    const newState = [...state];
    const i = action.index;
    
    switch (action.type) {
      case 'VOTE_ANGULAR':
        
        newState[i].angular++;
        return newState;
      case 'VOTE_REACT':

        newState[i].react++;
        return newState;
      case 'VOTE_VUEJS':
        
        newState[i].vuejs++;
        return newState;
      default:
        return state
    }
  }
  
  export default Votes;