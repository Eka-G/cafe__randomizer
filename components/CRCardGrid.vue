<template>
  <v-container id="cafes">
    <h2 class="mb-4 text-center">
      Список заведений
    </h2>

    <v-row
      v-if="store.error"
      class="my-6"
      justify="center"
    >
      <v-alert
        type="warning"
        title="Error!"
        :text="store.error"
      />
    </v-row>

    <v-row
      v-if="store.loading"
      class="my-6"
      justify="center"
    >
      <v-progress-circular
        :size="60"
        color="amber"
        indeterminate
      />
    </v-row>

    <v-row v-else>
      <v-col
        v-for="{ id, name, address, landmark, cuisine, distance, time, photo, business_lunch, price } in store.cafes"
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
  import { useStore } from "@/store";

  const store = useStore();
</script>
