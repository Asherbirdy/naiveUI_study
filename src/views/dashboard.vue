<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import CryptoCurrency_Card from "../components/CryptoCurrency_Card.vue";

interface Crypto {
  cryptoName: String;
  codeName: String;
  price: Number;
  currency: String;
  imageURL: String;
  percent: Number;
}

const crypto: Ref<Crypto[]> = ref<Crypto[]>([
  {
    cryptoName: "Bitcoin",
    codeName: "BTC",
    price: 721882,
    currency: "$",
    imageURL: "../src/assets/img/crypto_img/btc.png",
    percent: -1.23,
  },
  {
    cryptoName: "Ethereum",
    codeName: "ETH",
    price: 3000,
    currency: "$",
    imageURL: "../src/assets/img/crypto_img/eth.png",
    percent: 2.45,
  },
  {
    cryptoName: "NEM",
    codeName: "XEM",
    price: 3000,
    currency: "$",
    imageURL: "../src/assets/img/crypto_img/xem.png",
    percent: 2.45,
  },
  {
    cryptoName: "XRP",
    codeName: "Ripple",
    price: 3000,
    currency: "$",
    imageURL: "../src/assets/img/crypto_img/xrp.png",
    percent: -22.45,
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

  <n-row gutter="12">
    <n-col :span="6" v-for="(item, index) in crypto" :key="index">
      <CryptoCurrency_Card :cryptoData="item" />
    </n-col>
  </n-row>

  <!-- 其他段： -->
  <!-- <n-row gutter="12">
    <n-col :span="16">
      <n-card class="green" title="Card" wrap="false" style="width: 100%">
        Card Content
      </n-card>
    </n-col>

    <n-col :span="8">
      <n-card class="green" title="Card" wrap="false" style="width: 100%">
        Card Content
      </n-card>
    </n-col>
  </n-row> -->
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
</style>
