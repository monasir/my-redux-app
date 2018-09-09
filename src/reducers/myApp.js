function Votes(state=[], action) {
    const newState = [...state];
    const i = action.index;
    console.log(newState);
    switch (action.type) {
      case 'VOTE_ANGULAR':
        console.log("this is the i :"+i);
        newState[i].angular++;
        return newState;
      case 'VOTE_REACT':
        console.log("Your choice is React!")
        console.log("this is the i :"+i);
        newState[i].react++;
        return newState;
      case 'VOTE_VUEJS':
        console.log("Your choice is Vue.js")
        newState[i].vuejs++;
        return newState;
      default:
        return state
    }
  }
  
  export default Votes;