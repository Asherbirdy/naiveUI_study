<template>
  <n-data-table :columns="columns" :data="data" :row-props="rowProps" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      rowProps: (row: RowData) => {
        return {
          style: "cursor: pointer;",
          onClick: () => {},
        };
      },
      columns: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data: [
        {
          key: 0,
          name: "07akioni",
          age: "18",
          address: "Yiheyuan Road",
        },
        {
          key: 1,
          name: "08akioni",
          age: "14",
          address: "Pingshan Road",
        },
        {
          key: 2,
          name: "09akioni",
          age: "22",
          address: "Haidian Bridge",
        },
      ],
    };
  },
});
</script>
