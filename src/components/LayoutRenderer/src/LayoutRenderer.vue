<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const currentLayout = computed(() => {
  return defineAsyncComponent(() => import(`@/layouts/${route?.meta?.layout || 'DefaultLayout'}.vue`))
})
</script>

<template>
  <component :is="currentLayout">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>