import { createMachine } from 'xstate';

const elBox = document.querySelector('#box');

const machine = createMachine({
  // Add your object machine definition here
});

// Change this to the initial state
let currentState = undefined;

function send(event) {
  // Determine and update the `currentState`

  elBox.dataset.state = currentState.value;
}

elBox.addEventListener('click', () => {
  // Send a click event
});
