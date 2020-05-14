import { createMachine, interpret } from 'xstate';

const elBox = document.querySelector('#box');

const machine = createMachine({
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        mousedown: {
          target: 'active',
        },
      },
    },
    active: {
      on: {
        mouseup: {
          target: 'inactive',
        },
      },
    },
  },
});

// Create a service using interpret(...)
const service = interpret(machine);

// Listen to state transitions and set
service.onTransition((state) => {
  console.log(state.value);

  elBox.dataset.state = state.value;
});
// `elBox.dataset.state` to the state value as before.
// ...

// Start the service.
service.start();

elBox.addEventListener('mousedown', (event) => {
  // Send a mousedown event
  service.send(event);
});

elBox.addEventListener('mouseup', (event) => {
  // Send a mouseup event
  service.send(event);
});
