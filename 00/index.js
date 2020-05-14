import { createMachine } from 'xstate';

const elOutput = document.querySelector('#output');

function output(object) {
  elOutput.innerHTML = JSON.stringify(user, null, 2);
}

console.log('Welcome to the XState workshop!');

const user = {
  name: 'David Khourshid',
  company: 'Microsoft',
  interests: ['piano', 'state machines', 'animation'],
};

// output(user);

const machine = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        FETCH: 'pending',
      },
    },
    pending: {
      on: {
        RESOLVE: 'resolved',
        REJECT: 'rejected',
      },
    },
    resolved: {},
    rejected: {},
  },
};

const transition = (state, event) => {
  return machine.states[state]?.on?.[event] || state;
};

// 'idle'
let currentState = machine.initial;

const send = (event) => {
  const nextState = transition(currentState, event);

  console.log(nextState);

  currentState = nextState;
};

window.send = send;
