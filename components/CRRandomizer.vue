<template>
  <v-container
    id="randomizer"
    class="v-co-12 d-flex flex-column justify-center align-center"
  >
    <v-btn
      class="mb-0 mb-sm-4"
      color="accent"
      text="RANDOM CAFE"
      @click="clickHandler"
    />

    <v-sheet
      class="pa-1 d-flex justify-center align-center random-result"
      width="100%"
      color="background"
    >
      <div
        v-if="randomResult"
        class="py-0 py-sm-5"
      >
        <h3 class="mb-3 text-center">
          Рандом предлагает пойти в...
        </h3>

        <CRCafeCard
          :id="randomResult.id"
          :name="randomResult.name"
          :address="randomResult.address"
          :landmark="randomResult.landmark"
          :cuisine="randomResult.cuisine"
          :distance="randomResult.distance"
          :time="randomResult.time"
          :photo="randomResult.photo"
          :buisness-lunch="randomResult.business_lunch"
          :price="randomResult.price"
        />
      </div>
      

      <h2
        v-else
        class="my-10 text-center"
      >
        Быстрее жмите на кнопку!<br>
        ✨Здесь появится результат✨
      </h2>
    </v-sheet>
  </v-container>
</template>

<script setup>
  import { storeToRefs } from "pinia";
  import { useStore } from "@/store";

  const store = useStore();
  const { randomResult } = storeToRefs(store);

  const clickHandler = () => {
    const cafes = store.cafes;
    const amount = cafes.length;
    const randomIndex = Math.floor(Math.random() * amount);

    store.setRandomResult(cafes[randomIndex]);
  }
</script>

<style lang="scss">
  .random-result {
    border: 4px dashed rgba(var(--v-theme-on-background));
    background: left 95% / 14% 20% repeat-x url("logo.svg");
  }

  @media (max-width: 599px) {
    .random-result {
      border: none;
      background: none;
    }
  }
</style>
