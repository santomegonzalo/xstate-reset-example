import { createActorContext } from '@xstate/react';
import { assign, createMachine, setup } from 'xstate';


const initialContext = {
  userName: null,
};

const myMachine = createMachine({
  context: initialContext,
  id: 'myMachine',
  initial: 'IDLE',
  on: {
    reset: {
      target: '.IDLE',
      actions: assign(() => initialContext),
    },
  },
  states: {
    IDLE: {
      on: {
        start: {
          target: 'SUCCESS',
        },
      },
    },
    SUCCESS: {
      type: 'final',
    },
  },
});

const MyMachineContext = createActorContext(myMachine, {
  inspect: (inspectionEvent) => {
    if (inspectionEvent.type === '@xstate.actor') {
      console.log('========= @xstate.actor =========');
      console.log(inspectionEvent.actorRef);
    }

    if (inspectionEvent.type === '@xstate.event') {
      console.log('========= @xstate.event =========');
      console.log(inspectionEvent.sourceRef);
      console.log(inspectionEvent.actorRef);
      console.log(inspectionEvent.event);
    }

    if (inspectionEvent.type === '@xstate.snapshot') {
      console.log('========= @xstate.snapshot =========');
      console.log(inspectionEvent.actorRef);
      console.log(inspectionEvent.event);
      console.log(inspectionEvent.snapshot);
    }
  },
});

export { MyMachineContext };
