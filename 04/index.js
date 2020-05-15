import { createMachine, interpret } from 'xstate';

const elBox = document.querySelector('#box');

const setPoint = (context, event) => {
  // Set the data-point attribute of `elBox`
  elBox.dataset.point = `(${event.clientX}, ${event.clientY})`;
  console.log(`(${event.clientX}, ${event.clientY})`)
};

// FSM: ->idle -mousedown-> dragging
// FSM: idle <-mouseup- dragging
const machine = createMachine({
  initial: 'idle',
  states: {
    idle: {
      on: {
        mousedown: {
          // Add your action here
          actions: setPoint,
          target: 'dragging',
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
},
{
  actions: {
    setPoint,
  },
});

const service = interpret(machine);

service.onTransition((state) => {
  console.log(state);

  elBox.dataset.state = state.value;
});

service.start();

elBox.addEventListener('mousedown', (event) => {
  service.send(event);
});

elBox.addEventListener('mouseup', (event) => {
  service.send(event);
});
