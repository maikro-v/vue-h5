<script setup lang="ts">
import { Icon } from '@/components/Icon';
</script>

<template>
    <div>
        <h1 class="pt-48px px-32px text-48px">VueH5 - 现代化 Vue H5 项目模板</h1>
        
        <p class="text-28px text-#0009 px-32px pt-16px leading-44px">VueH5 是一个高效、灵活的 Vue 3 项目模板，基于 Vite、TypeScript 和最前沿的前端技术栈打造，专为快速开发而生。它融合了优雅的 UI 组件、自动化图标管理和灵活的权限控制，旨在为开发者提供一个高效、简洁且可扩展的开发环境。</p>

        <h2 class="px-32px  text-40px">
            <Icon icon="emojione:flag-for-rainbow-flag" size="30"></Icon><span class="ml-16px">核心特性</span>
        </h2>
        <t-cell-group bordered>
            <t-cell
                title="现代化技术栈"
                description="基于 Vue 3 的 Composition API，结合 TypeScript 强类型支持和 Vite 的极速构建，提升开发体验和项目性能"
            >
                <template #leftIcon>
                    <Icon icon="material-symbols:check-box-outline" size="30" />
                </template>
            </t-cell>
            <t-cell
                title="移动端适配"
                description="内置响应式布局和移动端优化，确保跨设备和不同屏幕尺寸上的优质用户体验。"
            >
                <template #leftIcon>
                    <Icon icon="material-symbols:check-box-outline" size="30"/>
                </template>
            </t-cell>
            <t-cell
                title="自动化图标管理"
                description="集成 Iconify，支持按需自动导入超过 200,000 个图标，减少冗余资源加载，提升性能。"
            >
                <template #leftIcon>
                    <Icon icon="material-symbols:check-box-outline" size="30"/>
                </template>
            </t-cell>
            <t-cell
                title="内置权限系统"
                description="提供灵活的权限管理模块，支持角色、路由权限配置，确保应用的安全性。"
            >
                <template #leftIcon>
                    <Icon icon="material-symbols:check-box-outline" size="30"/>
                </template>
            </t-cell>
            <t-cell
                title="优雅的UI设计与组件库"
                description="集成tDesign作为UI框架，提供丰富的组件和精美的设计，帮助快速构建一致性高、用户体验优越的界面。"
            >
                <template #leftIcon>
                    <Icon icon="material-symbols:check-box-outline" size="30"/>
                </template>
            </t-cell>
            <t-cell
                title="UnoCSS 支持"
                description="使用 UnoCSS 原子化 CSS 框架，按需生成样式，减少冗余 CSS 代码，提升页面加载速度和性能。"
            >
                <template #leftIcon>
                    <Icon icon="material-symbols:check-box-outline" size="30"/>
                </template>
            </t-cell>
        </t-cell-group>
        
        <h2 class="px-32px  text-40px">
            <span class="ml-16px">为什么选择VueH5？</span>
        </h2>
        <t-cell-group bordered>
            <t-cell
                title="快速启动"
                description="开箱即用，减少了大量配置，开发者可以专注于功能开发。"
            >
                <template #leftIcon>
                    <Icon icon="emojione:1st-place-medal" size="30" />
                </template>
            </t-cell>
            <t-cell
                title="高效扩展"
                description="灵活的权限系统和UI组件扩展，满足不同应用的需求。"
            >
                <template #leftIcon>
                    <Icon icon="emojione:1st-place-medal" size="30" />
                </template>
            </t-cell>
            <t-cell
                title="极致性能"
                description="Vite + TypeScript + UnoCSS 构建，确保项目性能和可维护性。"
            >
                <template #leftIcon>
                    <Icon icon="emojione:1st-place-medal" size="30" />
                </template>
            </t-cell>
        </t-cell-group>
    </div>
</template>
