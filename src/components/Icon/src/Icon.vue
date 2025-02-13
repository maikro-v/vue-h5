
<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps({
    // 图标名称，包含库名称和图标名称，例如 'mdi:home' 或 'fa-solid:camera'
  icon: {
    type: String,
    required: true
  },
    // 图标大小，可以是像素(px)或相对单位(例如'2rem' 或 '50%')
  size: {
    type: [String, Number],
    default: '1em'
  },
    // 自定义样式对象，允许用户传入额外的样式
  customStyle: {
    type: Object,
    default: () => ({})
  }
})

// 合并用户传入的样式和其他默认样式
const styles = computed(() => {
    return {
        display: 'inline-block',
        ...props.customStyle
    };
})

const bindProps = computed(() => {
    const data = { ...props }

    const ignoreProps = ['customStyle', 'size', 'icon']

    for (const prop of ignoreProps) {
        delete data[prop] 
    }

    return data
})
</script>

<template>
    <Icon :icon="props.icon" :width="props.size" :height="props.size" :style="styles" v-bind="bindProps"/>
</template>

