<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import CryptoCurrency_Card from "@/components/CryptoCurrency_Card.vue";
import MarketCap from "@/components/MarketCap.vue";
import KLineChart from "@/components/KLineChart.vue";
import { useCryptoStore } from "@/stores/crypto";

const { cryptoData } = useCryptoStore();

const sliceParamterOne = ref(0);
const sliceParamterTwo = ref(4);

const sliceCryptoData = () => {
  return cryptoData.slice(sliceParamterOne.value, sliceParamterTwo.value);
};

const onlyFourCrypto = ref(sliceCryptoData());

function switchCard_add() {
  sliceParamterOne.value += 1;
  sliceParamterTwo.value += 1;
  onlyFourCrypto.value = sliceCryptoData();
  crypto.value = onlyFourCrypto.value;
}

function switchCard_minus() {
  sliceParamterOne.value -= 1;
  sliceParamterTwo.value -= 1;
  onlyFourCrypto.value = sliceCryptoData();
  crypto.value = onlyFourCrypto.value;
}

const crypto = ref(onlyFourCrypto);
</script>

<template>
  <!-- 虛擬貨幣字卡 -->
  <div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        margin-bottom: 7px;
        gap: 4px;
      "
    >
      <div>
        <!-- 麵包 -->
        <n-breadcrumb separator=">">
          <n-breadcrumb-item>
            <n-icon> </n-icon>
            Home
          </n-breadcrumb-item>
          <n-breadcrumb-item>
            <n-icon> </n-icon>
            Account
          </n-breadcrumb-item>
          <n-breadcrumb-item>
            <n-icon> </n-icon>
            Category
          </n-breadcrumb-item>
        </n-breadcrumb>
      </div>
      <!-- 加密貨幣 字卡按鈕-->
      <n-space>
        <n-button @click="switchCard_minus" :disabled="sliceParamterOne === 0"
          >&lt;</n-button
        >
        <n-button
          @click="switchCard_add"
          :disabled="sliceParamterTwo === cryptoData.length"
          >&gt;</n-button
        ></n-space
      >
    </div>

    <!-- 字卡區 -->
    <n-row gutter="12" style="margin-bottom: 20px">
      <n-col :span="6" v-for="(item, index) in crypto" :key="index">
        <CryptoCurrency_Card :cryptoData="item" />
      </n-col>
    </n-row>

    <!-- 左Ｋ線 右價格 -->
    <!-- <n-layout has-sider>
      <n-layout-content content-style="padding: 0 14px;">
        asdas
        <KLineChart />
      </n-layout-content>
      <n-layout-sider :width="400" content-style="padding: 0 14px;">
        <MarketCap />
      </n-layout-sider>
    </n-layout> -->

    <n-row gutter="24">
      <n-col :span="12">
        <div class="light-green">
          <KLineChart />
        </div>
      </n-col>
      <n-col :span="12">
        <div class="green">
          <MarketCap />
        </div>
      </n-col>
    </n-row>
  </div>
</template>

<style scoped>
.light-green {
  width: 100%;
  height: 300px;
}
.green {
  width: 100%;
}

.n-card > .n-card__content:first-child,
.n-card > .n-card__footer:first-child {
  padding-top: var(--n-padding-bottom);
}

.n-layout-header,
.n-layout-footer {
  padding: 24px;
}
</style>
