<template>
  <v-card
    width="300"
    height="420"
  >
    <v-img
      height="200"
      :src="imgPath"
      cover
    />

    <v-card-title class="text-center font-weight-bold">
      {{ name }}
    </v-card-title>

    <v-card-subtitle class="pb-4 text-center">
      <span class="me-1">Кухня: {{ cuisine || noInfo }}</span>
      <v-icon
        color="success"
        icon="mdi-silverware-variant"
        size="small"
      />
    </v-card-subtitle>

    <v-row
      class="pa-2"
      justify="center"
    >
      <v-chip
        class="mr-2"
        prepend-icon="mdi-run"
        color="info"
      >
        {{ distance || "?" }} м
      </v-chip>

      <v-chip
        prepend-icon="mdi-clock-time-two-outline"
        color="info"
      >
        {{ time || "?" }} мин
      </v-chip>
    </v-row>

    <v-row
      class="pb-2"
      justify="center"
    >
      <v-chip
        prepend-icon="mdi-cash"
        :color="lunchColor"
      >
        ланч: {{ lunchPrice }}
      </v-chip>
    </v-row>

    <v-card-text class="mt-2 pa-3">
      <p class="d-block text-truncate">
        <v-icon icon="mdi-map-marker-outline" />
        {{ address || noInfo }}
      </p>

      <p
        v-if="landmark"
        class="d-block text-truncate"
      >
        <v-icon icon="mdi-information-variant" />
        {{ landmark }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number,
        default: 0,
        required: true,
      },
      name: {
        type: String,
        default: "",
        required: true,
      },
      address: {
        type: String,
        default: "",
      },
      landmark: {
        type: String,
        default: "",
      },
      cuisine: {
        type: String,
        default: "",
      },
      distance: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
      photo: {
        type: String,
        default: "./meal.png",
      },
      buisnessLunch: {
        type: Boolean,
        default: false,
      },
      price: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        noInfo: "нет информации",
      }
    },
    computed: {
      imgPath() {
        return this.photo || "./meal.png";
      },
      lunchPrice() {
        return this.buisnessLunch ? `${this.price} руб` : "нет";
      },
      lunchColor() {
        return this.buisnessLunch ? "success" : "warning";
      },
    }
  }
</script>
