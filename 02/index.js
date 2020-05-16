import { createMachine } from 'xstate';

const elBox = document.querySelector('#box');

// FSM: ->inactve <-CLICK-> active
const machine = createMachine({
  initial: "inactive",
  states: {
    inactive: {
      on: {
        CLICK: {
          target: 'active',
        },
      }
    },
    active: {
      on: {
        CLICK: {
          target: 'inactive',
        },
      }
    }
  }
});

// Change this to the initial state
let currentState = machine.initialState;

const send = event => {
  // Determine and update the `currentState`
  const currentState = machine.transition(currentState, event)

  console.log(currentState)

  elBox.dataset.state = currentState.value;

}

elBox.addEventListener('click', () => {
  // Send a click event
  send({ type: "CLICK" })
});
