const elBox = document.querySelector('#box');

function transition(state, event) {
  switch (
    state
    // Add your state/event transitions here
    // to determine and return the next state
  ) {
  }
}

// Keep track of your current state
let currentState = undefined;

// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  // ...
}

function send(event) {
  // Determine the next value of `currentState`

  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  // send a click event
});
