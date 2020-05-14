import { createMachine, interpret } from 'xstate';

const elBox = document.querySelector('#box');

const setPoint = (context, event) => {
  elBox.dataset.point = `(${event.clientX}, ${event.clientY})`;
};

const machine = createMachine(
  {
    initial: 'idle',
    states: {
      idle: {
        on: {
          mousedown: {
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
  }
);

const service = interpret(machine);

service.onTransition((state) => {
  console.log(state);

  elBox.dataset.state = state.value;
});

service.start();

elBox.addEventListener('mousedown', (event) => {
  // service.send({ type: 'mousedown', ... })
  service.send(event);
});

elBox.addEventListener('mouseup', (event) => {
  // service.send({ type: 'mousedown', ... })
  service.send(event);
});
