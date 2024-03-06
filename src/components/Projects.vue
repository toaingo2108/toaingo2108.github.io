<template>
  <v-row class="mt-5">
    <v-col cols="4" v-for="item in workItems">
      <v-hover v-slot="{ isHovering, props }">
        <v-card
          :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 12 : 2"
          v-bind="props"
          style="height: 100%"
        >
          <v-img :src="item.image" height="100%" cover />
          <v-overlay
            :model-value="isHovering"
            class="align-center justify-center"
            scrim="#000"
            contained
          >
            <div class="ma-5">
              <div>
                {{ item.title }}
              </div>
              <div style="font-size: 12px">
                {{ item.description }}
              </div>
              <v-btn
                variant="text"
                prepend-icon="mdi-link"
                @click="goToWeb(item.web)"
                v-if="item.web"
                class="mt-2"
                >See more info</v-btn
              >
              <div class="d-flex flex-row">
                <v-btn
                  variant="plain"
                  height="30"
                  width="100"
                  class="me-2"
                  v-if="item.android"
                  @click="goToWeb(item.android)"
                >
                  <img
                    src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                    width="100"
                    height="30"
                  />
                </v-btn>
                <v-btn
                  variant="plain"
                  height="30"
                  width="100"
                  v-if="item.ios"
                  @click="goToWeb(item.ios)"
                >
                  <img
                    src="../assets/apple-store.png"
                    width="100"
                    height="30"
                  />
                </v-btn>
              </div>
            </div>
          </v-overlay>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { WorkItem } from "@/types/interfaces";
import { reactive } from "vue";
import aKinderImage from "@/assets/akindervolunteer.png";
import aKinderWellnessImage from "@/assets/akinderwellness.png";
import goPuffImage from "@/assets/gopuff-food-drink-delivery.png";
import smartShanghaiImage from "@/assets/smartshanghai.png";
import billeasyImage from "@/assets/billeasy.png";
import mopImage from "@/assets/mobile-office-pro.png";

const workItems = reactive<Array<WorkItem>>([
  {
    id: 1,
    title: "Gopuff - Food & Drink Delivery",
    description:
      "Gopuff is a leading Instant Commerce platform that brings thousands of everyday products to customers in minutes.",
    web: "https://www.gopuff.com",
    android: "https://play.google.com/store/apps/details?id=com.main.gopuff",
    ios: "https://apps.apple.com/us/app/gopuff-alcohol-food-delivery/id722804810",
    image: goPuffImage,
  },
  {
    id: 1,
    title: "SmartShanghai",
    description:
      "For over 15 years, SmartShanghai has been your irreverent, independent, and all-encompassing guide to Shanghai life – offering daily lifestyle content, extensive directories, community platforms, ticketing services, and even an online marketplace!",
    web: "https://www.smartshanghai.com/",
    android:
      "https://play.google.com/store/apps/details?id=com.smartshanghaiapp.smartshanghaicompany.smartshanghai&hl=en&gl=US&pli=1",
    ios: "https://apps.apple.com/us/app/smartshanghai/id353096339",
    image: smartShanghaiImage,
  },
  {
    id: 0,
    title: "aKinder™Volunteer",
    description:
      "aKinder™Volunteer is your passport to a world of meaningful volunteer opportunities",
    web: "https://akindervolunteer.com",
    image: aKinderImage,
  },
  {
    id: 1,
    title: "aKinder™Wellness",
    description:
      "aKinder™Wellness is a web and app-based software solution that brings together nonprofits, volunteers, and individuals to address critical community needs.",
    web: "https://akinderwellness.com",
    image: aKinderWellnessImage,
  },
  {
    id: 1,
    title: "MobileOfficePro",
    description:
      "MobileOfficePro empowers you to manage your business essentials on the go.",
    web: "https://www.homeofficepro.net/mobileofficepro",
    android:
      "https://play.google.com/store/apps/details?id=com.main.mop&hl=en&gl=US&pli=1",
    ios: "https://apps.apple.com/ca/app/mobile-office-pro/id1131132715",
    image: mopImage,
  },
  {
    id: 1,
    title: "Billeasy",
    description:
      "Kickstart your Vue 3, Vuetify, and TypeScript admin panel projects with the comprehensive boilerplate and example provided by Billeasy.",
    web: "https://toaingo2108.github.io/Billeasy-vue/",
    image: billeasyImage,
  },
]);

const goToWeb = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
</script>
