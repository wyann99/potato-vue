<template>
    <div id="app">
        <div class="page-wrap">
            <router-view/>
        </div>
    </div>
</template>

<script>
import '@/styles/base.scss'
import '@/styles/normal.scss'
import '@/styles/mint-custom.scss'

export default {
    name: 'APP'
}
</script>

<style lang="scss">
.page-wrap {
    height: 100%;
    width: 100%;
}
</style>
