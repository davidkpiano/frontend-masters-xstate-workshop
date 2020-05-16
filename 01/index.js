const elBox = document.querySelector('#box');

// FSM: ->inactve <-CLICK-> active
const machine = {
  initial: "inactive",
  states: {
    inactive: {
      on: {
        CLICK: "active"
      }
    },
    active: {
      on: {
        CLICK: "inactive"
      }
    }
  }
}

// Pure function that returns the next state,
// given the current state and sent event
const transition = (state, event) => {
  return machine.states[state]?.on?.[event] || state ;
}

// Keep track of your current state
// start with inactive initial state
let currentState = machine.initial;

// Interpreting state machines
const send = event => {
  // Determine the next state
  const nextState = transition(currentState, event)
  console.log(nextState)

  elBox.dataset.state = nextState;

  // Update the current state
  currentState = nextState;
}

elBox.addEventListener('click', () => {
  // send a click event
  send("CLICK")
});
