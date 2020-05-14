import { createMachine } from 'xstate';

const elOutput = document.querySelector('#output');

const output = object => {
  elOutput.innerHTML = JSON.stringify(user, null, 2);
}

console.log('Welcome to the XState workshop!');

const user = {
  name: 'David Khourshid',
  company: 'Microsoft',
  interests: ['piano', 'state machines'],
};

output(user);
