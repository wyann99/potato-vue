<template>
    <el-row class="app-container">
        <topbar></topbar>
        <el-col :span="24" class="main-container">
            <left-sidebar></left-sidebar>
            <section class="content-container">
                <router-view></router-view>
                <keep-alive>
                    <router-view  name="keepAliveInApp"></router-view>
                </keep-alive>
            </section>
        </el-col>
    </el-row>
</template>

<script>
    import topbar from '../components/common/topbar'
    import sidebar from '../components/common/sidebar'
    // import store from '../../store'

    export default {
        name: 'index',
        components: {
            'left-sidebar': sidebar,
            'topbar': topbar
        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .app-container {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
        min-width: 1250px;
        overflow: auto;
        .main-container {
            display: flex;
            position: absolute;
            top: $top-header-height;
            bottom: 0;
            overflow: hidden;
            .content-container {
                padding: 0 10px 0 10px;
                background-color: #ECF0F6;
                flex: 1;
                overflow-y: auto;
            }
        }
    }
</style>
