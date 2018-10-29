<template>
    <div id="app" class="app">
        <router-view></router-view>
        <keep-alive>
            <router-view name="keepAliveInApp"></router-view>
        </keep-alive>
    </div>
</template>

<script>
import '@/styles/main.scss'

// import Vue from 'vue'
import sidebar from '@/components/common/sidebar.vue'

export default {
    name: 'APP',
    components: {
        'left-sidebar': sidebar
    }
}
</script>

<style lang="scss">
.app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
}
</style>
