<template>
  <NuxtLayout>
    <v-container class="v-col-12 v-col-sm-10">
      <CRDescription class="mb-6" />
      <CRCardGrid />
    </v-container>
  </NuxtLayout>
</template>

<script setup>
  import { onBeforeMount } from 'vue'
  import { useStore } from "@/store";

  const store = useStore();

  onBeforeMount(() => {
    store.getCafes();
  })
</script>
