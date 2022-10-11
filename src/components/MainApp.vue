<template>
  <v-card>
    <v-toolbar color="blue-grey darken-2"  dark flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Kontor</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="white" outlined class="mr-4">
        GitHub
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-card-text v-text="text" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "MainApp",
  data() {
    return {
      tab: null,
      items: ["Form", "Dolar $", "Euro €"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
