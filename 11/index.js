import { createMachine, interpret } from 'xstate';

const elApp = document.querySelector('#app');
const elOffButton = document.querySelector('#offButton');
const elOnButton = document.querySelector('#onButton');
const elModeButton = document.querySelector('#modeButton');

const displayMachine = createMachine(
  {
    initial: 'hidden',
    states: {
      hidden: {
        on: {
          TURN_ON: 'visible',
        },
      },
      visible: {
        // Add parallel states here for:
        type: 'parallel',
        on: {
          TURN_OFF: 'hidden',
        },
        states: {
          // - mode (light or dark)
          mode: {
            initial: 'light',
            states: {
              light: {
                on: {
                  SWITCH: 'dark',
                },
              },
              dark: {
                on: {
                  SWITCH: 'light',
                },
              },
            },
          },
          // - brightness (bright or dim)
          brightness: {
            initial: 'bright',
            states: {
              bright: {
                after: {
                  TIMEOUT: 'dim',
                },
              },
              dim: {
                on: {
                  SWITCH: 'bright',
                },
              },
            },
          },
        },
      },
    },
  },
  {
    delays: {
      TIMEOUT: 5000,
    },
  }
);

const displayService = interpret(displayMachine)
  .onTransition((state) => {
    elApp.dataset.state = state.toStrings().join(' ');
  })
  .start();

elOnButton.addEventListener('click', () => {
  displayService.send('TURN_ON');
});

elOffButton.addEventListener('click', () => {
  displayService.send('TURN_OFF');
});

elModeButton.addEventListener('click', () => {
  displayService.send('SWITCH');
});
