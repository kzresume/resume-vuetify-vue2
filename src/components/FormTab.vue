<template>
  <div>
    <v-row>
      <v-col :lg="colsValue.lg" :md="colsValue.md" :sm="colsValue.sm">
        <p class="mx-6">Amount zł</p>
        <v-text-field
        v-model.number="amountsPLN"
        min="0"
          max="9999999"
          label="zł"
          single-line
          type="number"
          class="mx-6 my-2"
          outlined
        />
        
      </v-col>
      <v-col :lg="colsValue.lg" :md="colsValue.md" :sm="colsValue.sm">
        <p class="mx-6">Amount €</p>
        <v-text-field
        v-model.number="amountsEURO"
        label="€"
        min="0"
        max="9999999"
        single-line
        type="number"
          class="mx-6 my-2"
          outlined
        />
      </v-col>
      <v-col :lg="colsValue.lg" :md="colsValue.md" :sm="colsValue.sm">
        <p>Amount $</p>
        <v-text-field
          v-model.number="amountsDOLAR"
          label=" $"
          min="0"
          max="9999999"
          single-line
          type="number"
          class="mx-6 my-2"
          outlined
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FormTab",
  data() {
    return {
      amountsEURO: 0,
      amountsDOLAR: 0,
      amountsPLN: 0,
      colsValue: { lg: 4, md: 6, sm: 12 },
    };
  },
};
</script>
