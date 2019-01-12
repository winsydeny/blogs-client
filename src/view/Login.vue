<template>
    <div class="login">
        <h1>Login</h1>
        <form>
            <label>username:</label><input type="text" name="user" id="user" v-model="userinfo.username"><br>
            <label>password:</label><input type="password" name="pwd" id="pwd" v-model="userinfo.password"><br>
            <input type="button" value="submit" @click="login">
            <p>No Account?/<router-link to="/register">register</router-link></p>
        </form>
        <button @click="getvuex">GET</button>
        <router-view></router-view>
    </div>
</template>
<script>
import {remove,get, post} from '../api/axios'
import jwt from 'jsonwebtoken'
import store from '../store/index.js'
export default {
    name:'login',
    data(){
        return{
            userinfo:{
                username:'',
                password:''
            }
            
        }
    },
    methods:{
        login(){
            post('/api/login',this.userinfo).then((data)=>{
                const token = data.data.token;
                if(token){
                    let jt = jwt.decode(token);
                    // console.log(jt);
                    localStorage.setItem('token',token);
                    store.dispatch({type:'updateUser',user:jt});
                    alert("登录成功");

                }else{
                    alert(data.data);
                }


            },(err) => {
                throw err;
            })
        },
        register(){
            
        },
        getvuex(){
           let token = store.getters.getUser;
           console.log(token);  
        }
    }
}
</script>
<style lang="scss">
    .login{
        text-align: center;
        form{
            input{
                padding: 6px;
                margin: 8px;
                border-radius: 12px;
                border:none;
                 outline: none;
            }
            input[type="button"]{
                color:white;
                padding:6px 12px;
                border-radius: 6px;
                background: red;
               
                cursor: pointer;

            }
        }
    }
</style>