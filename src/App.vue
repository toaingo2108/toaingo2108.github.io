<template>
  <v-app :theme="theme">
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-btn
        :prepend-icon="
          theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
        @click="onToggleTheme"
      >
        Toggle Theme
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref(getBrowserTheme());

localStorage.hasOwnProperty("theme") ? (theme.value = getTheme()) : setTheme();

function onToggleTheme() {
  theme.value = theme.value === "light" ? "dark" : "light";
  setTheme();
}

function getBrowserTheme() {
  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme() {
  localStorage.setItem("theme", JSON.stringify(theme.value));
}

function getTheme() {
  return JSON.parse(localStorage.getItem("theme") ?? "{}");
}
</script>

<style>
::-webkit-scrollbar {
  width: 0.6rem;
  background-color: #b388ff;
}

::-webkit-scrollbar-thumb {
  background-color: #d1c4e9;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #ede7f6;
}

a {
  text-decoration: none;
}

.v-slide-group__content {
  justify-content: center;
}

.v-timeline--vertical.v-timeline {
  height: auto;
}

.v-progress-linear__background,
.v-progress-linear__determinate {
  max-width: calc(100% - 25px) !important;
}
</style>
