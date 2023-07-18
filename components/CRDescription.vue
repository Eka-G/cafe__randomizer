<template>
  <v-sheet class="pa-4">
    <h1 class="mb-4 text-center main-title">
      Добро пожаловать в Cafe Random!
    </h1>
    <p class="text-body-2 text-sm-body-1 text-center font-weight-bold">
      Если Вы устали от вопроса "куда сходить поесть?", то Cafe Random поможет определиться с выбором. Выберите случаное заведение простым кликом на кнопку "RANDOM CAFE".<br>
      Не стесняйтесь пробовать несколько раз!<br>
      Проверить список мест можно через кнопку <v-icon>mdi-rice</v-icon> "Заведения".
    </p>
  </v-sheet>
</template>

<style>
  @media (max-width: 599px) {
    .main-title {
      font-size: 1.5rem;
    }
  }
</style>
