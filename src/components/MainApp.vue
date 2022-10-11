<template>
  <v-card class="ma-4" elevation-10> 
    <v-toolbar color="blue-grey darken-2"  dark flat>
      <v-toolbar-title>Kontor</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="white" outlined class="mr-4">
        GitHub
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" grow center-active align-with-title>
          <v-tabs-slider color="blue-grey lighten-5" />
          <v-tab v-for="item in items" :key="item" class="">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab" class="mt-5">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text  >
            <pre>{{money}}</pre>
        </v-card-text  >
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "MainApp",
  props:{
    money:Array,
  },
  data() {
    return {
      tab: 0,
      items: ["Form", "Dolar $", "Euro €"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
