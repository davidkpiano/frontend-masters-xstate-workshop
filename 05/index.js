import { createMachine, assign, interpret } from 'xstate';

const elBox = document.querySelector('#box');
const elBody = document.body;

const assignPoint = assign({
  px: (context, event) => event.clientX,
  py: (context, event) => event.clientY,
});

const assignDelta = assign({
  dx: (context, event) => {
    return event.clientX - context.px;
  },
  dy: (context, event) => {
    return event.clientY - context.py;
  },
});

const showDelta = (context) => {
  elBox.dataset.delta = `delta: ${context.dx}, ${context.dy}`;
};

const assignPosition = assign({
  x: (context, event) => {
    return context.x + context.dx;
  },
  y: (context, event) => {
    return context.y + context.dy;
  },
  dx: 0,
  dy: 0,
  px: 0,
  py: 0,
});

const resetPosition = assign({
  dx: 0,
  dy: 0,
  px: 0,
  py: 0,
});


const showPosition = (context) => console.log(context)

const machine = createMachine({
  initial: 'idle',
  // context are infinite states
  // cannot model with FSM
  context: {
    x: 0, // total dx
    y: 0, // total dy
    dx: 0, // change from x-position on the browser
    dy: 0, // change from y-position on the browser
    px: 0, // x-position on the browser
    py: 0, // y-position on the browser
  },
  // idle -mousedown-> dragging
  // idle <-mouseup- dragging
  // dragging <-mousemove-> dragging
  states: {
    idle: {
      on: {
        mousedown: {
          // Assign the point
          // action is a side effect
          actions: [assignPoint],
          target: 'dragging',
        },
      },
    },
    dragging: {
      on: {
        mousemove: {
          // Assign the delta
          actions: [assignDelta, showDelta],
          // (no target!)
        },
        mouseup: {
          // Assign the position
          actions: assignPosition,
          target: 'idle',
        },
        'keyup.escape': {
          actions: [resetPosition, showPosition],
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
    console.log(state.value);

    elBox.style.setProperty('--dx', state.context.dx);
    elBox.style.setProperty('--dy', state.context.dy);
    elBox.style.setProperty('--x', state.context.x);
    elBox.style.setProperty('--y', state.context.y);
  }
});

service.start();

elBox.addEventListener('mousedown', (event) => {
  service.send(event);
});

elBody.addEventListener('mousemove', (event) => {
  service.send(event);
});

elBody.addEventListener('mouseup', (event) => {
  service.send(event);
});

elBody.addEventListener('keyup', (e) => {
  console.log('keyup', e.key)
  if (e.key === 'Escape') {
    service.send('keyup.escape');
  }
});