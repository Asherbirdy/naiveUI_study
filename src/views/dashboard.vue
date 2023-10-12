<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import CryptoCurrency_Card from "../components/CryptoCurrency_Card.vue";
import MarketCap from "../components/MarketCap.vue";

interface Crypto {
  cryptoName: String;
  codeName: String;
  price: Number;
  currency: String;
  imageURL: String;
  percent: Number;
  chartData: Number[];
}

const crypto: Ref<Crypto[]> = ref<Crypto[]>([
  {
    cryptoName: "Bitcoin",
    codeName: "BTC",
    price: 721882,
    currency: "$",
    imageURL: "../src/assets/img/crypto_img/btc.png",
    percent: -1.23,
    chartData: [142, 143, 101, 264, 90, 340, 250],
  },
  {
    cryptoName: "Ethereum",
    codeName: "ETH",
    price: 3000,
    currency: "$",
    imageURL: "../src/assets/img/crypto_img/eth.png",
    percent: 2.45,
    chartData: [10, 20, 31, 40, 90, 20, 40],
  },
  {
    cryptoName: "NEM",
    codeName: "XEM",
    price: 3000,
    currency: "$",
    imageURL: "../src/assets/img/crypto_img/xem.png",
    percent: 2.45,
    chartData: [400, 143, 200, 264, 320, 340, 250],
  },
  {
    cryptoName: "XRP",
    codeName: "Ripple",
    price: 3000,
    currency: "$",
    imageURL: "../src/assets/img/crypto_img/xrp.png",
    percent: -22.45,
    chartData: [2, 143, 101, 264, 90, 340, 40],
  },
]);

console.log(crypto);
</script>

<template>
  <n-breadcrumb separator=">">
    <n-breadcrumb-item>
      <n-icon>
        <md-cash />
      </n-icon>
      Home
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon><md-cash /> </n-icon>
      Account
    </n-breadcrumb-item>
    <n-breadcrumb-item>
      <n-icon> <md-cash /> </n-icon>
      Category
    </n-breadcrumb-item>
  </n-breadcrumb>

  <!-- 虛擬貨幣字卡 -->
  <n-row gutter="12">
    <n-col :span="6" v-for="(item, index) in crypto" :key="index">
      <CryptoCurrency_Card :cryptoData="item" />
    </n-col>
  </n-row>

  <n-layout has-sider>
    <n-layout-content content-style="padding: 24px;">
      Pingshan Road
    </n-layout-content>
    <n-layout-sider content-style="padding: 24px;">
      Handian Bridge
      <MarketCap />
    </n-layout-sider>
  </n-layout>
</template>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}

.n-card > .n-card__content:first-child,
.n-card > .n-card__footer:first-child {
  padding-top: var(--n-padding-bottom);
}

.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
