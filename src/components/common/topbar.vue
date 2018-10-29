<template>
    <div class="top-bar">
        <div class="logo">
            <img src="../../assets/images/logo.jpeg" alt="">
        </div>
        <div class="header">
            <div class="h1">土地流转“一张图”信息化协调管控平台</div>
            <div class="h3">广西来宾现代农业投资集团有限公司</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topbar'
    }
</script>

<style lang="scss" scroped>
    .top-bar {
        position: relative;
        width: 100%;
        height: 80px;
        background: $color-primary;

        .logo {
            float: left;
            width: 100px;
            height: 65px;
            margin: 8px 18px 0 15px;

            img {
                width: 100px;
                height: 65px;
            }
        }

        .header {
            padding: 8px 0 0 0;
            .h1 {
                font-size: 24px;
                color: $text-color;
                line-height: 32px;
                margin-bottom: 8px;
            }

            .h3 {
                font-size: 16px;
                color: $text-color;
            }

        }
    }
</style>
