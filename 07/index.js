import { createMachine, assign, interpret } from 'xstate';

const elBox = document.querySelector('#box');
const elBody = document.body;
const elButton = document.querySelector('#button');

const assignPoint = assign({
  px: (context, event) => event.clientX,
  py: (context, event) => event.clientY,
});

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

const assignDelta = assign({
  dx: (context, event) => {
    return event.clientX - context.px;
  },
  dy: (context, event) => {
    return event.clientY - context.py;
  },
});

const resetPosition = assign({
  dx: 0,
  dy: 0,
  px: 0,
  py: 0,
});

const isAuthorized = context => {
  return !!context.user;
};

const updateUser = context => {
  console.log(context.user.name)
  elBox.textContent = context.user.name
}
const createDragDropMachine = user => createMachine({
  // The initial state should check auth status instead.
  initial: 'checkingAuth',
  context: {
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    px: 0,
    py: 0,
    user,
  },
  states: {
    // Add two states:
    // - checkingAuth (with transient transitions)
    // - unauthorized
    checkingAuth: {
      on: {
        '': [
          {
            cond: isAuthorized,
            actions: updateUser,
            target: 'idle',
          }, 
          {
            target: 'unauthorized',
          }
        ]
      }
    },
    unauthorized: {
      on: {
        SIGN_IN: {
          target: 'checkingAuth',
          actions: assign({
            user: (_, event) => {
              return event.user;
            },
          }),
        }
      }
    },
    idle: {
      on: {
        mousedown: {
          actions: assignPoint,
          target: 'dragging',
        },
      },
    },
    dragging: {
      on: {
        mousemove: {
          actions: assignDelta,
        },
        mouseup: {
          actions: [assignPosition],
          target: 'idle',
        },
        'keyup.escape': {
          target: 'idle',
          actions: resetPosition,
        },
      },
    },
  },
});

const service = interpret(createDragDropMachine(null));

service.onTransition((state) => {
  elBox.dataset.state = state.value;

  if (state.changed) {
    console.log(state.context);

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
  if (e.key === 'Escape') {
    service.send('keyup.escape');
  }
});

elButton.addEventListener('click', () => {
  service.send({
    type: 'SIGN_IN',
    user: {
      name: 'David',
    },
  });
});