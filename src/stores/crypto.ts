import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";

export interface Crypto {
  cryptoName: String;
  codeName: String;
  price: Number;
  currency: String;
  imageURL: String;
  percent: Number;
  chartData: Number[];
  color: Number[];
}

export const useCryptoStore = defineStore("cryptoStore", () => {
  const cryptoData: Ref<Crypto[]> = ref<Crypto[]>([
    {
      cryptoName: "Bitcoin",
      codeName: "BTC",
      price: 721882,
      currency: "$",
      imageURL: "../src/assets/svg/BTC.svg",
      percent: -1.23,
      chartData: [142, 143, 101, 264, 90, 340, 250],
      color: [255, 165, 0],
    },
    {
      cryptoName: "Ethereum",
      codeName: "ETH",
      price: 3000,
      currency: "$",
      imageURL: "../src/assets/svg/ETH.svg",
      percent: 2.45,
      chartData: [10, 20, 31, 40, 90, 20, 40],
      color: [0, 0, 255],
    },

    {
      cryptoName: "NEM",
      codeName: "XEM",
      price: 3000,
      currency: "$",
      imageURL: "../src/assets/svg/XEM.svg",
      percent: 2.45,
      chartData: [400, 143, 200, 264, 320, 340, 250],
      color: [60, 180, 113],
    },
    {
      cryptoName: "XRP",
      codeName: "Ripple",
      price: 3000,
      currency: "$",
      imageURL: "../src/assets/svg/XRP.svg",
      percent: -22.45,
      chartData: [2, 143, 101, 264, 90, 340, 40],
      color: [106, 90, 205],
    },
  ]);
  return { cryptoData } as const;
});
