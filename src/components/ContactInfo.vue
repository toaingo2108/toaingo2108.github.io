<template>
  <div class="contact-info">
    <h5 class="text-h5 text-uppercase text-deep-purple-accent-1">
      {{ header }}
    </h5>
    <div class="contact-info__item mt-3" v-for="(item, i) in data" :key="i">
      <div class="contact-info__icon">
        <v-icon size="x-large">{{ item.icon }}</v-icon>
      </div>
      <div class="contact-info__content">
        <span class="text-uppercase text-button">{{ item.title }}</span>
        <a :href="item.href" :target="item.target">{{ item.value }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContactInfoData } from "@/types/interfaces";
import { reactive } from "vue";

defineProps({
  header: String,
});

const data = reactive<Array<ContactInfoData>>([
  {
    icon: "mdi-cellphone-sound",
    title: "Phone",
    value: "+ 84 986744529",
    href: "tel:+84986744529",
    target: undefined,
  },
  {
    icon: "mdi-domain",
    title: "Upwork",
    value: "toaiq",
    href: "https://www.upwork.com/freelancers/toaiq",
    target: "_blank",
  },
  {
    icon: "mdi-gmail",
    title: "Gmail",
    value: "toaingoquoc00@gmail.com",
    href: "mailto:toaingoquoc00@gmail.com",
    target: undefined,
  },
  {
    icon: "mdi-github",
    title: "GitHub",
    value: "toaingo2108",
    href: "https://github.com/toaingo2108",
    target: "_blank",
  },
  {
    icon: "mdi-linkedin",
    title: "LinkedIn",
    value: "toại-ngô-104b69325",
    href: "https://www.linkedin.com/in/to%E1%BA%A1i-ng%C3%B4-104b69325/",
    target: "_blank",
  },
]);
</script>

<style scoped>
.contact-info__item {
  display: flex;
  align-items: flex-end;
}

.contact-info__content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>
