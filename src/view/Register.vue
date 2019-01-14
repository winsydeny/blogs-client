<template>
    <div class="register">
        <h1>register</h1>
         <form>
            <label>username:</label><input type="text" name="user" id="user" v-model="userinfo.username"><br>
            <label>password:</label><input type="password" name="pwd" id="pwd" v-model="userinfo.password"><br>
            <input type="button" value="register" @click="register">
        </form>
    </div>
</template>
<script>
import { post } from '../api/axios'
export default {
    name:'register',
    data(){
        return{
            userinfo:{
                username:null,
                password:null
            }
        }
    },
    methods:{
        register(){
            post('/api/register',this.userinfo).then((res) => {
                console.log(res);
                if(res.data.success){
                    alert("注册成功");  
                }else{
                    alert(res.data.error);
                }
            },(err)=>{console.log(err)})
        }
    }
}
</script>
<style lang="scss" scoped>
    .register{
            text-align:center;

        
    }
</style>
