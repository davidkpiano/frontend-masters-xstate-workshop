import { createMachine, interpret } from 'xstate';

const elBox = document.querySelector('#box');

const setPoint = (context, event) => {
  elBox.dataset.point = `(${event.clientX}, ${event.clientY})`;
};

const machine = createMachine({
  initial: 'idle',
  states: {
    idle: {
      on: {
        mousedown: {
          target: 'dragging',
          actions: [setPoint],
        },
      },
    },
    dragging: {
      on: {
        mouseup: {
          target: 'idle',
        },
      },
    },
  },
});

const service = interpret(machine);

service.onTransition((state) => {
  elBox.dataset.state = state.value;
});

service.start();

elBox.addEventListener('mousedown', service.send);

elBox.addEventListener('mouseup', service.send);
