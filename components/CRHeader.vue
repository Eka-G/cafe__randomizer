<template>
  <v-app-bar
    color="primary"
    image="logo.svg"
    fixed
  >
    <v-app-bar-title class="font-weight-bold">
      Cafe Random
    </v-app-bar-title>
    
    <v-btn
      href="#cafes"
      icon
    >
      <v-icon>
        mdi-rice
      </v-icon>
      <v-tooltip
        activator="parent"
        location="bottom"
      >
        Заведения
      </v-tooltip>
    </v-btn>

    <v-btn
      href="#randomizer"
      icon
    >
      <v-icon>
        mdi-dice-5
      </v-icon>
      <v-tooltip
        activator="parent"
        location="bottom"
      >
        Рандомайзер
      </v-tooltip>
    </v-btn>
  </v-app-bar>
</template>
