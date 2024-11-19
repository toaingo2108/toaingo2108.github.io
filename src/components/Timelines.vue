<template>
  <div class="timeline mt-5">
    <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">
      Education & work
    </h5>
    <v-timeline class="mt-5">
      <v-timeline-item
        v-for="timeline in timelines"
        :key="timeline.id"
        :dot-color="timeline.color"
        :icon="timeline.icon"
        size="large"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-button text-${timeline.color}`"
            v-text="timeline.period"
          ></div>
        </template>
        <div>
          <h2
            :class="`mt-n1 headline font-weight-light mb-4 text-${timeline.color}`"
          >
            {{ timeline.title }}
          </h2>
          <h5 :class="`text-button text-${timeline.color}`">
            {{ timeline.position }}
          </h5>
          <span class="text-subtitle-2">{{ timeline.description }}</span>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
  <div class="timeline mt-10 mb-10">
    <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">
      Projects
    </h5>
    <projects />
  </div>
</template>

<script setup lang="ts">
import { TimelineItem } from "@/types/interfaces";
import { reactive } from "vue";
import Projects from "./Projects.vue";

const timelines = reactive<Array<TimelineItem>>([
  {
    id: 0,
    icon: "mdi-book-education",
    color: "cyan lighten-1",
    title: "Ho Chi Minh University of Science",
    position: "Software Engineer",
    period: "SEP 2017 — JUN 2021",
    description: "Bachelor of Engineering",
  },
  {
    id: 1,
    icon: "mdi-briefcase-variant",
    color: "amber darken-1",
    title: "Buymed",
    position: "Software Engineer",
    period: "MAR 2022 — MAY 2023",
    description:
      "As a Software Engineer at Buymed, I played a key role in developing and maintaining various software solutions. My technical expertise in Flutter, Vue, Node.js, and MongoDB enabled me to contribute significantly to the team. I was involved in the full software development lifecycle, from concept to deployment, ensuring high-quality and efficient software solutions. My work encompassed both front-end and back-end development, demonstrating versatility and a deep understanding of modern web technologies.",
  },
  {
    id: 4,
    icon: "mdi-briefcase-variant",
    color: "deep-orange-lighten-1",
    title: "Upwork",
    position: "Senior Full-stack developer",
    period: "JUL 2023 — PRESENT",
    description:
      "Skills: Flutter · Vue.js · Node.js · Mobile Application Development · Full-Stack Development · Back-End Web Development · Front-End Development · Dart · Kotlin · GitHub · Continuous Integration and Continuous Delivery (CI/CD) · Swift (Programming Language) · MongoDB",
  },
]);
</script>
