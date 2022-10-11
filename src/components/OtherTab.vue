<template>
  <div>
<p class="text-center"> Update {{titleData}}</p>
    <v-data-table
    :headers="headers"
    :items="tableData"
    :items-per-page="20"
    dense
    class="elevation-1 ma-4"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "OtherTab",
  props: { money: Array },
  data() {
    return {
      headers: [
        { text: "Name", value: "currency" },
        { text: "Code", value: "code" },
        { text: "Rate zł", value: "mid" },
      ],
    };
  },
  computed:{
    tableData(){
        return this.money[0].rates
    },
    titleData(){
        return this.money[0].effectiveDate
    },
  }
};
</script>
