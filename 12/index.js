import { createMachine, assign, interpret } from 'xstate';

const elBox = document.querySelector('#box');

const randomFetch = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        rej('Fetch failed!');
      } else {
        res('Fetch succeeded!');
      }
    }, 2000);
  });
};

const machine = createMachine({
  initial: 'idle',
  states: {
    idle: {
      on: {
        FETCH: 'pending',
      },
    },
    pending: {
      invoke: {
        // Invoke your promise here.
        // The `src` should be a function that returns the source.
        src: (context, event) => {
          return randomFetch();
        },
        onDone: 'resolved',
        onError: 'rejected',
      },
    },
    resolved: {
      // Add a transition to fetch again      
      on: {
        FETCH: 'pending',
      },
    },
    rejected: {
      // Add a transition to fetch again      
      on: {
        FETCH: 'pending',
      },
    },
  },
});

const service = interpret(machine);

service.onTransition((state) => {
  elBox.dataset.state = state.toStrings().join(' ');

  console.log(state);
});

service.start();

elBox.addEventListener('click', (event) => {
  service.send('FETCH');
});
