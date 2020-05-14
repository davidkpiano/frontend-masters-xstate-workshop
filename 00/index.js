import { createMachine, interpret } from 'xstate';

const feedbackMachine = createMachine({
  initial: 'question',
  states: {
    question: {
      on: {
        CLICK_GOOD: {
          target: 'thanks',
        },
      },
    },
    form: {},
    thanks: {},
    closed: {},
  },
});

const feedbackService = interpret(feedbackMachine);

feedbackService.onTransition((state) => {
  console.log(state.value);
});

feedbackService.start();

feedbackService.send({
  type: 'CLICK_GOOD',
});
