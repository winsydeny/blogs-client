<template>
    <el-header id="head-nav">
     <!-- <span>{{ user }}<span> -->
    <el-row>
        <el-col :span="18"><div class="grid-content"><h4>{{user}}</h4></div></el-col>
        <el-col :span="6">
            <div class="grid-content">
                <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                :default-active="this.$route.path"
                >
                <el-menu-item index="/">Home</el-menu-item>
                <el-menu-item index="/categories">Category</el-menu-item>
                <el-menu-item index="/about">About</el-menu-item>
                <el-menu-item index="/login" v-if="!checkCurrentUser">Login</el-menu-item>
                <el-submenu index="">
                    <template slot="title">{{user}}</template>
                    <el-menu-item index="/user/profile">Profile</el-menu-item>
                    <el-menu-item index="/user/add"  v-if="checkCurrentUser">Add</el-menu-item>
                    <el-menu-item index="" @click="signOut">Sign out</el-menu-item>
                </el-submenu>
                </el-menu>
            </div>
        </el-col>
    </el-row>
    </el-header>
</template>
<script>
import store from '../store/index.js';
export default {
    name:'head-nav',
    data(){
        return {
        }
    },
    methods:{
        signOut(){
            if(!localStorage.getItem('token')){
                alert("请登录");
                this.$router.push('/login');
            }else{
                localStorage.removeItem('token');
            alert('注销成功');
            }
            
        }
    },
    computed:{
        user(){
            if(store.getters.getUser){
                return store.getters.getUser.username;
            }
            return 'please login'
        },
        checkCurrentUser(){
            if(store.getters.getUser){
                return true;
            }
            return false;
        }
    }
}
</script>
<style lang="scss" scoped>
#head-nav{
    color: black;
    background: rgb(84, 92, 100);

    h4{
        display: inline-block;
        line-height: 60px;
        padding:0 16px;
        color: white;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 24px;
    }
    ul{ 
        overflow: hidden;
        width:25vw;
        li{
            display: inline-block;
            line-height: 60px;
            padding:0 8px;    
        }
    }
}
</style>