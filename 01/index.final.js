const elBox = document.querySelector('#box');

// function transition(state, event) {
//   switch (state) {
//     case 'inactive':
//       switch (event) {
//         case 'CLICK':
//           return 'active';
//         default:
//           return state;
//       }
//     case 'active':
//       switch (event) {
//         case 'CLICK':
//           return 'inactive';
//         default:
//           return state;
//       }
//     default:
//       return state;
//   }
// }

const machine = {
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        CLICK: 'active',
      },
    },
    active: {
      on: {
        CLICK: 'inactive',
      },
    },
  },
};

let currentState = machine.initial;

function transition(state, event) {
  const nextState = machine.states[state].on?.[event] || state;

  return nextState;
}

function send(event) {
  currentState = transition(currentState, event);

  console.log(currentState);

  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  send('CLICK');
});
