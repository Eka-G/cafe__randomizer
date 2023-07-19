import { defineStore } from "pinia";
import { Card } from "@/shared/types";

type State = {
  cafes: Card[] | null,
  randomResult: Card | null,
  loading: boolean,
  error: string | null,
}

export const useStore = defineStore("main", {
  state: (): State => ({
    cafes: null,
    randomResult: null,
    loading: false,
    error: null,
  }),
  actions: {
    async getCafes() {
      try {
        this.loading = true;

        const response = await fetch("https://bandaumnikov.ru/api/test/site/get-index");

        this.loading = false;

        if (!response.ok) {
          throw new Error("Ooops! Произошла ошибка, попробуйте позже еще раз =)");
        }

        const cafes = await response.json();

        this.cafes = cafes.data;
      } catch (error: any) {
        this.error = error.message;
      }
    },
    setRandomResult(data: Card) {
      this.randomResult = data;
    },
  },
});
