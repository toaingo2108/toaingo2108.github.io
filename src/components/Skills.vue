<template>
  <div class="technical-skills">
    <h5 class="text-h5 text-uppercase text-center text-deep-purple-accent-1">
      Technical skills
    </h5>
    <v-slide-group show-arrows center-active class="mt-3">
      <v-slide-group-item
        v-for="option in skills.options"
        :key="option.id"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="ma-2"
          rounded
          :color="option.id === activeOption ? 'primary' : undefined"
          @click="toggleOption(option)"
        >
          {{ option.name }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
    <v-item-group selected-class="bg-primary" class="technical-skills__row">
      <v-row>
        <v-col
          v-for="skill in skillItems"
          :key="skill.id"
          :cols="
            xs ? '12' : sm ? '6' : md || lg ? '4' : xlAndUp ? '3' : undefined
          "
        >
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
            <v-card
              :class="['technical-skills__item', selectedClass]"
              @click="toggle"
            >
              <div class="text-h5 text-center">
                {{ isSelected ? skill.experience : skill.name }}
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useDisplay } from "vuetify";
import { SkillItemData, SkillsData, SkillOptions } from "../types/interfaces";

const { xs, sm, md, lg, xlAndUp } = useDisplay();

const skills = reactive<SkillsData>({
  options: [
    {
      id: 1,
      name: "Back-end",
    },
    {
      id: 2,
      name: "Front-end",
    },
    {
      id: 3,
      name: "Mobile",
    },
    {
      id: 4,
      name: "UI",
    },
    {
      id: 5,
      name: "DBMS",
    },
    {
      id: 6,
      name: "DevOps",
    },
    {
      id: 7,
      name: "Other",
    },
  ],
  items: [
    {
      id: 1,
      option: 1,
      name: "Node.js",
      experience: "5 year",
    },
    {
      id: 2,
      option: 1,
      name: "Express.js",
      experience: "5 year",
    },
    {
      id: 3,
      option: 1,
      name: "Laravel",
      experience: "2 years",
    },
    {
      id: 4,
      option: 1,
      name: "Nest.js",
      experience: "2 years",
    },
    {
      id: 5,
      option: 1,
      name: "Yii2",
      experience: "2 years",
    },
    {
      id: 5,
      option: 1,
      name: "PHP",
      experience: "4 years",
    },
    {
      id: 6,
      option: 2,
      name: "Vue.js",
      experience: "5 years",
    },
    {
      id: 7,
      option: 2,
      name: "Nuxt.js",
      experience: "4 years",
    },
    {
      id: 26,
      option: 2,
      name: "Angular",
      experience: "4 years",
    },
    {
      id: 8,
      option: 2,
      name: "React.js",
      experience: "5 years",
    },
    {
      id: 28,
      option: 2,
      name: "Next.js",
      experience: "5 years",
    },
    {
      id: 27,
      option: 2,
      name: "HTML5",
      experience: "5 years",
    },
    {
      id: 9,
      option: 3,
      name: "Android/Kotlin",
      experience: "6 year",
    },
    {
      id: 10,
      option: 3,
      name: "iOS/Swift",
      experience: "6 year",
    },
    {
      id: 11,
      option: 3,
      name: "Flutter/Dart",
      experience: "5 year",
    },
    {
      id: 25,
      option: 3,
      name: "SwiftUI",
      experience: "5 year",
    },
    {
      id: 12,
      option: 4,
      name: "Vuetify",
      experience: "5 year",
    },
    {
      id: 13,
      option: 4,
      name: "Bootstrap",
      experience: "3 years",
    },
    {
      id: 14,
      option: 4,
      name: "Tailwind",
      experience: "1 year",
    },
    {
      id: 15,
      option: 5,
      name: "MySQL",
      experience: "3 years",
    },
    {
      id: 16,
      option: 5,
      name: "MongoDB",
      experience: "4 years",
    },
    {
      id: 17,
      option: 5,
      name: "PostgreSQL",
      experience: "2 years",
    },
    {
      id: 18,
      option: 5,
      name: "SQL Server",
      experience: "2 years",
    },
    {
      id: 19,
      option: 5,
      name: "Firebase",
      experience: "3 years",
    },
    {
      id: 20,
      option: 6,
      name: "Docker",
      experience: "1 year",
    },
    {
      id: 21,
      option: 6,
      name: "GCP",
      experience: "1 year",
    },
    {
      id: 22,
      option: 6,
      name: "AWS",
      experience: "2 years",
    },
    {
      id: 23,
      option: 6,
      name: "CI/CD",
      experience: "1 year",
    },
    {
      id: 24,
      option: 6,
      name: "Heroku",
      experience: "1 year",
    },
    {
      id: 25,
      option: 7,
      name: "Figma",
      experience: "2 years",
    },
    {
      id: 22,
      option: 7,
      name: "Photoshop",
      experience: "2 years",
    },
    {
      id: 23,
      option: 7,
      name: "Vite",
      experience: "2 year",
    },
    {
      id: 24,
      option: 7,
      name: "REST API",
      experience: "2 years",
    },
  ],
});

const activeOption = ref<number | undefined>();

const skillItems = computed(() =>
  activeOption.value != undefined
    ? skills.items.filter(
        (item: SkillItemData) => item.option === activeOption.value
      )
    : skills.items
);

const toggleOption = (option: SkillOptions) =>
  (activeOption.value =
    activeOption.value === option.id ? undefined : option.id);
</script>

<style scoped>
.technical-skills__row {
  display: flex;
  margin-top: 24px;
}

.technical-skills__item {
  display: flex;
  flex: 0 1 25%;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80px;
  user-select: none;
}
</style>
