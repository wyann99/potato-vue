<template>
    <div class="content">
        <div class="view-login">
            <div class="login-content">
                <h3>potato系统登录中心</h3>
                <el-form :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-input v-model="userName" placeholder="请输入用户名"></el-input>
                    <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
                    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import router from '../router'
    // import { mapGetters, mapActions } from 'vuex'
    import store from '../store'
    import * as types from '../store/types'

    export default {
        name: 'login',
        data() {
            return {
                userName: '',
                password: '',
                rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!')
                        const params = {
                            Phone: this.userName,
                            password: this.passWord
                        }

                        store.dispatch('login/loginAction', params).then((data) => {
                            if (data.token) {
                                this.$store.commit(types.LOGIN, data.token)
                                this.$router.push('/index')
                            }
                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            }
        }
    }

</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    background: url(../assets/images/timg.jpg) no-repeat center center;
    background-size: cover;

    .view-login {
        position: fixed;
        top: 50%;
        right: 10%;
        width: 300px;
        padding: 20px 45px 45px;
        margin-top: -140px;
        background: rgba(249,249,249,0.2);

        .el-input {
            margin-bottom: 15px;
        }

        .el-button--primary {
            width: 100%;
        }
    }
}

</style>
