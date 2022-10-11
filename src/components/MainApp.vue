<template>
  <v-card class="ma-4" elevation-10>
    <v-toolbar color="blue-grey darken-2" dark flat>
      <v-toolbar-title>Kontor</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="white" outlined class="mr-4"> GitHub </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" grow center-active align-with-title>
          <v-tabs-slider color="blue-grey lighten-5" />
          <v-tab v-for="item in items2" :key="item.position">
            {{ item.name }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab" class="mt-5">
      <v-tab-item v-for="item in items2" :key="item.position">
        <component :is="item.component"></component>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import DolarTabVue from "./DolarTab.vue";
import EuroTabVue from "./EuroTab.vue";
import FormTabVue from "./FormTab.vue";
import OtherTabVue from "./OtherTab.vue";

export default {
  name: "MainApp",
  props: {
    money: Array,
  },
  data() {
    return {
      tab: 0,
      items: ["FormTab", "Dolar $", "Euro €"],
      items2: [
        { component: FormTabVue, name: "Form", position: 0 },
        { component: DolarTabVue, name: "Dolar", position: 1 },
        { component: EuroTabVue, name: "Euro", position: 2 },
        { component: OtherTabVue, name: "Other", position: 3 },
      ],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
