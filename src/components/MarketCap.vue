<template>
  <n-data-table :columns="columns" :data="data" :row-props="rowProps" />
</template>
<script setup lang="ts">
import { ref, h } from "vue";

const rowProps = (row: any) => {
  return {
    style: "cursor: pointer;",
    onClick: () => {},
  };
};

const columns = [
  {
    title: "Market Cap",
    key: "name",
    render: (row: any) => {
      return h("div", { style: { display: "flex", alignItems: "center" } }, [
        h("img", {
          src: row.imageSrc, // Assuming you have an 'imageSrc' property in your data
          style: { marginRight: "10px" }, // Adjust margin as needed
        }),
        row.name,
      ]);
    },
  },
  {
    key: "price",
  },
  {
    key: "percent",
  },
];

const data = ref([
  {
    key: 0,
    name: "BTC",
    price: 2000,
    percent: 10,
    imageSrc: "../src/assets/img/crypto_img/btc.png",
  },
  {
    key: 0,
    name: "BTC",
    price: 2000,
    percent: -10,
    imageSrc: "../src/assets/img/crypto_img/btc.png",
  },
  {
    key: 0,
    name: "BTC",
    price: 2000,
    percent: 10,
    imageSrc: "../src/assets/img/crypto_img/btc.png",
  },
  {
    key: 0,
    name: "BTC",
    price: 2000,
    percent: 0,
    imageSrc: "../src/assets/img/crypto_img/btc.png",
  },
]);
</script>
