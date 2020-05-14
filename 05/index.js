import { createMachine, assign, interpret } from 'xstate';

const elBox = document.querySelector('#box');
const elBody = document.body;

const machine = createMachine({
  initial: 'idle',
  // Set the initial context
  // Clue: {
  //   x: 0,
  //   y: 0,
  //   dx: 0,
  //   dy: 0,
  //   px: 0,
  //   py: 0,
  // }
  // context: ...,
  states: {
    idle: {
      on: {
        mousedown: {
          // Assign the point
          // ...
          target: 'dragging',
        },
      },
    },
    dragging: {
      on: {
        mousemove: {
          // Assign the delta
          // ...
          // (no target!)
        },
        mouseup: {
          // Assign the position
          target: 'idle',
        },
      },
    },
  },
});

const service = interpret(machine);

service.onTransition((state) => {
  if (state.changed) {
    console.log(state.context);

    elBox.dataset.state = state.value;

    elBox.style.setProperty('--dx', state.context.dx);
    elBox.style.setProperty('--dy', state.context.dy);
    elBox.style.setProperty('--x', state.context.x);
    elBox.style.setProperty('--y', state.context.y);
  }
});

service.start();

// Add event listeners for:
// - mousedown on elBox
// - mousemove on elBody
// - mouseup on elBody
