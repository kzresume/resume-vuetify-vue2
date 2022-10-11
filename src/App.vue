<template>
  <v-app>
    <v-main class="blue-grey lighten-5">
      <MainApp :money="money" /> 
    </v-main>
  </v-app>
</template>

<script>
import MainApp from "./components/MainApp.vue";
import apiClient from "./services/apiClient";

export default {
  name: "App",
  components: {
    MainApp,
  },
  data: () => ({
    money:[],
    country:[],
  }),
  created(){
    apiClient.get("").then(({data})=>
    {
      this.money = data;
      this.country=data[0].rates.map((value)=>value.currency)
    })
  }
};
</script>
