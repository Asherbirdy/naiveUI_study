<template>
  <n-data-table :columns="columns" :data="data" :row-props="rowProps" />
</template>
<script setup lang="ts">
import { ref, h } from "vue";
import Percent from "../components/Percent.vue";

import { useCryptoStore } from "@/stores/crypto";
const { cryptoData } = useCryptoStore();

const data = ref(cryptoData);
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
      return h(
        "div",
        { style: { display: "flex", alignItems: "center", width: "80px" } },
        [
          h("img", {
            src: row.imageURL,
            style: { width: "20%", marginRight: "5px" },
          }),
          row.codeName,
        ]
      );
    },
  },
  {
    key: "price",
    render: (row: any) => {
      return h(
        "div",
        { style: { display: "flex", alignItems: "center", gap: "10px" } },
        [row.price, "$"]
      );
    },
  },
  {
    key: "percent",
    render: (row: any) => {
      return h(Percent, {
        percent: row.percent,
      });
    },
  },
];

// const data = ref([
//   {
//     key: 0,
//     name: "BTC",
//     price: 2000,
//     percent: 10,
//     imageSrc: "../src/assets/svg/BTC.svg",
//   },
//   {
//     key: 1,
//     name: "BCH",
//     price: 2000,
//     percent: -10,
//     imageSrc: "../src/assets/svg/BCH.svg",
//   },
//   {
//     key: 2,
//     name: "ETH",
//     price: 2000,
//     percent: 10,
//     imageSrc: "../src/assets/img/crypto_img/btc.png",
//   },
//   {
//     key: 3,
//     name: "LTC",
//     price: 2000,
//     percent: 0,
//     imageSrc: "../src/assets/img/crypto_img/btc.png",
//   },
// ]);
</script>
