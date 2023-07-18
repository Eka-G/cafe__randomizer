<template>
  <v-container id="cafes">
    <h2 class="mb-4 text-center">
      Список заведений
    </h2>

    <v-row>
      <v-col
        v-for="{ id, name, address, landmark, cuisine, distance, time, photo, business_lunch, price } in cafes"
        :key="id"
        class="v-col-12 v-col-sm-6 v-col-lg-4 v-col-xl-3 v-col-xxl-2 d-flex justify-center"
      >
        <CRCafeCard
          :id="id"
          :name="name"
          :address="address"
          :landmark="landmark"
          :cuisine="cuisine"
          :distance="distance"
          :time="time"
          :photo="photo"
          :buisness-lunch="business_lunch"
          :price="price"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import base from "~/assets/data.json";

  const cafes = base.data;
</script>
