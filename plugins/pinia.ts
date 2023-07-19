import { Pinia } from 'pinia';
import { useStore } from '~/store'

type PiniaType = Pinia | null | undefined;

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useStore($pinia as PiniaType)
    },
  };
});
