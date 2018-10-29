<template>
    <aside class="left-sidebar">
        <!-- <div class="menu-toggle">
            <a href="javascript:;" class="toggle">
                <i class="fa fa-arrow-left"></i>
            </a>
        </div> -->
        <div class="menu-container">
            <!--导航菜单-展开状态-->
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background="#f7f7f"
                text-color="#555"
                active-text-color="#3bbbca">
                <template>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4">选项4</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航二</span>
                        </template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-menu-item index="2-4">选项选项选项选项选1</el-menu-item>
                    </el-submenu>
                </template>
            </el-menu>

            <!--导航菜单-展开状态-->
            <!-- <el-menu class="menu-expanded"
                     :default-active="$route.name"
                     unique-opened
                     router
                     v-show="!menuCollapsed"> -->
                <!-- <template v-for="(item,index) in menu"> -->
                    <!--有子菜单-->
                    <!-- <el-submenu :index="index+''" v-if="item.children && item.children.length>0 && hasPermissions(item)" :key="index">
                        <template slot="title">
                            <div class="primary-menu-item">
                                <i class="fa" :class="item.icon||defIconCls"></i>
                                {{item.text}}
                            </div>
                        </template>
                        <el-menu-item v-for="child in item.children"
                                      :index="child.route.name"
                                      :route="child.route"
                                      :key="child.route.name"
                                      :class="{'is-active':isActive(child)}"
                                      v-if="hasPermissions(child)">
                            <div class="second-menu-item">
                                {{child.text}}
                            </div>
                        </el-menu-item>
                    </el-submenu> -->
                    <!--没有子菜单-->
                    <!-- <el-menu-item :index="item.route.name" :route="item.route" v-else-if="hasPermissions(item)" :key="item.route.name">
                        <div class="primary-menu-item">
                            <i class="fa" :class="item.icon||defIconCls"></i>
                            {{item.text}}
                        </div>
                    </el-menu-item> -->
                <!-- </template> -->
            <!-- </el-menu> -->
            <!--导航菜单-折叠状态-->
            <!-- <ul class="el-menu menu-collapsed"
                ref="collapsedMenu"
                v-show="menuCollapsed">
                <li class="el-submenu menu-item-li" v-for="(item,index) in menu" :key="index"> -->
                    <!--有子菜单-->
                    <!-- <template v-if="item.children&&item.children.length>0">
                        <div class="el-submenu__title" @mouseover="showMenu(index,true)"
                             :class="{'is-active':isParentActive(item)}"
                             @mouseout="showMenu(index,false)">
                            <div class="primary-menu-item">
                                <i class="fa" :class="item.icon||defIconCls"></i>
                            </div>
                        </div>
                        <ul class="el-menu submenu-popover" :class="'submenu-hook-'+index"
                            @mouseover="showMenu(index,true)"
                            @mouseout="showMenu(index,false)">
                            <li v-for="child in item.children"
                                :key="child.route.name"
                                class="el-menu-item"
                                :class="{'is-active':isActive(child)}"
                                @click="$router.push(child.route)"
                                v-if="hasPermissions(child)">
                                <div class="second-menu-item">
                                    {{child.text}}
                                </div>
                            </li>
                        </ul>
                    </template> -->
                    <!--没有子菜单-->
                    <!-- <template v-else-if="hasPermissions(item)">
                        <div class="el-submenu__title el-menu-item"
                             :class="{'is-active':isActive(item)}"
                             @click="$router.push(item.route)">
                            <div class="primary-menu-item">
                                <i class="fa" :class="item.icon||defIconCls"></i>
                            </div>
                        </div>
                    </template>
                </li>
            </ul> -->
        </div>

        <div class="toolbar">
            <div class="title-com">
                <div class="com">POTATO</div>
                <div class="title">ADMIN(管理员)</div>
                <div class="code-version">12312345</div>
            </div>
            <div class="tools">
                <a href="javascript:;" class="tool" @click="logout">
                    <i class="fa fa-power-off"></i>
                </a>
            </div>
        </div>

    </aside>
</template>
<script>
    // import { mapGetters, mapActions } from 'vuex'
    // import { logout } from '../../libs/sso'
    // import UserInfo from './user-info.vue'
    // import CallBarMixin from '@/components/common/call-bar/mixin'
    // import { permissionNames } from '@/permission-name'

    export default {
        name: 'sidebar',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath)
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath)
            }
        }
        // mixins: [CallBarMixin],
        // components: {
        //     UserInfo
        // },
        // data() {
        //     return {
        //         codeVersion: CODE_VERSION,
        //         defIconCls: 'fa-circle-o'
        //     }
        // },
        // computed: {
        //     ...mapGetters(['menuCollapsed', 'allPermission', 'menu', 'userInfo'])
        // },
        // methods: {
        //     ...mapActions(['toggleMenu', 'getUserInfo']),
        //     logout() {
        //         logout()
        //         // this.$callBar.doOffline().then(() => {
        //         //     logout()
        //         // }).catch(() => {
        //         //     logout()
        //         // })
        //     },
        //     /**
        //      * 显示子菜单
        //      */
        //     showMenu(index, status) {
        //         this.$refs.collapsedMenu.getElementsByClassName('submenu-hook-' + index)[0].style.display = status ? 'block' : 'none'
        //     },
        //     /**
        //      * 拥有菜单权限
        //      * @param item
        //      * @return {*}
        //      */
        //     hasPermissions(item) {
        //         // let isDev = (process.env.NODE_ENV || '').indexOf('dev') !== -1
        //         // menu-config里每一项都需要配置route.name，（包括含有children属性的路由）
        //         if (!item.route) {
        //             console.error('请在menu-config中给路由添加route和name')  // eslint-disable-line
        //             return false
        //         }
        //         // 如果路由中权限属性为false，则去判断name标识，否则返回true
        //         if (!item.route.permission) {
        //             // return isDev ? true : this.allPermission.includes(permissionNames(item.route.name))
        //             return this.allPermission.includes(permissionNames(item.route.name))
        //         }
        //         return item.route.permission
        //     },
        //     /**
        //      * 子菜单active
        //      * @param item
        //      * @return {boolean}
        //      */
        //     isActive(item) {
        //         let matched = this.$route.matched || []
        //         return matched.filter(m => m.name === item.route.name).length > 0
        //     },
        //     /**
        //      * 父及菜单active
        //      * @param item
        //      * @return {boolean}
        //      */
        //     isParentActive(item) {
        //         let isParentMenuActive = false;
        //         (item.children || []).forEach((child) => {
        //             if (this.isActive(child)) {
        //                 isParentMenuActive = true
        //             }
        //         })
        //         return isParentMenuActive
        //     }
        // },
        // created() {
        //     this.getUserInfo()
        // }
    }
</script>
<style lang="scss">
    $menu-item-height: 35px;
    $text-normal-color: mix($text-light-color, $left-sidebar-bg-color, 100%);

    .left-sidebar {
        font-size: $base-font-size;
        width: $left-sidebar-width;
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: $left-sidebar-bg-color;
        transition: width .3s;

    //     .menu-toggle {
    //         position: absolute;
    //         top: 0;
    //         right: 0;
    //         width: 0;
    //         height: 0;
    //         border-top: $left-sidebar-mini-width solid $left-sidebar-assist-color;
    //         border-left: $left-sidebar-mini-width solid transparent;
    //         .toggle {
    //             position: absolute;
    //             top: -$left-sidebar-mini-width;
    //             right: 0;
    //             color: $text-normal-color;
    //             margin: 5px;
    //             transition: transform .3s;
    //         }
    //         .collapsed& {
    //             border-top: $left-sidebar-mini-width solid $left-sidebar-assist-color;
    //             border-right: $left-sidebar-mini-width solid transparent;
    //             .toggle {
    //                 left: 0;
    //                 right: auto;
    //                 transform: rotateZ(180deg);
    //             }
    //         }
    //     }
        .menu-container {
            flex: 1;
            overflow-x: hidden;
            overflow-y: auto;
            // .collapsed& {
            //     overflow: inherit;
            // }
            // [class^=fa] {
            //     vertical-align: baseline;
            //     margin-right: 10px;
            //     &.fa-volume-control-phone {
            //         transform: rotate(320deg);
            //     }
            // }
            .el-menu {
                border-radius: 0;
                background-color: $left-sidebar-bg-color;
                .el-menu-item, .el-submenu__title {
                    background-color: transparent;
                    // color: $text-normal-color;
                    &:hover {
                        color: $text-light-color;
                    }
                }
                .el-menu-item {
                    height: $menu-item-height;
                    line-height: $menu-item-height;
                    padding: 0 30px;
                    &.is-active {
                        color: $text-light-color;
                    }
                }
                .el-submenu__title {
                    color: #fff;
                    height: $menu-item-height;
                    line-height: $menu-item-height;
                }
                .el-submenu {
                    &.is-opened {
                        .el-submenu__title {
                            color: $text-light-color;
                        }
                    }
                    .el-menu-item {
                        padding: 0 0 0 48px!important;
                    }
                }
            }

            // .menu-collapsed {
            //     width: $left-sidebar-mini-width;
            //     .menu-item-li {
            //         position: relative;
            //         .el-submenu__title {
            //             padding: 0 20px !important;
            //             &.is-active {
            //                 color: $text-light-color;
            //             }
            //         }
            //         .submenu-popover {
            //             display: none;
            //             position: absolute;
            //             top: 0;
            //             left: $left-sidebar-mini-width;
            //             z-index: 99999;
            //             height: auto;
            //             max-height: calc(50vh);
            //             overflow: auto;
            //             .el-menu-item {
            //                 padding: 0 30px !important;
            //             }
            //         }
            //     }
            // }
        }
        .toolbar {
            position: absolute;
            bottom: 10px;
            left: 0;
            width: 100%;
            text-align: center;
            .title-com {
                color: $text-color;
                // .collapsed& {
                //     display: none;
                // }
                .com {
                    font-size: 14px;
                    font-weight: bolder;
                }
                .title {
                    font-size: 12px;
                }
                .code-version {
                    color: $text-color;
                    font-size: 12px;
                }
            }
            .tools {
                padding: 9px 0;
                .tool {
                    font-size: 16px;
                    color: $text-color;
                }
            }
        }

    }
    // li {
    //     outline: none;
    // }

</style>
