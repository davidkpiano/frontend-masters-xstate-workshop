const elBox = document.querySelector('#box');


// Pure function that returns the next state,
// given the current state and sent event
const transition = (state, event) => {
  // FSM: ->inactve <-CLICK-> active
  switch (state) {
    case "inactive":
      switch (event) {
        case "CLICK":
          return "active";
        default:
          return state;  
      } 
    case "active":
      switch (event) {
        case "CLICK":
          return "inactive";
        default:
          return state;  
      } 
    default:
      return state;  
  }
}

// Keep track of your current state
// start with inactive initial state
let currentState = "inactive";

const send = event => {
  // Determine the next value of `currentState`
  currentState = transition(currentState, event)
  console.log(currentState)
  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  // send a click event
  send("CLICK")
});
