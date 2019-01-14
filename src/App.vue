<template>
  <div id="app">
    <Header></Header>
    <!-- <div class="header">
      <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/add">Add Blogs</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
      </ul>
    </div> -->
    <div class="contain">
          <router-view></router-view>
    </div>
    <div class="footer"><p>Copy@2018</p></div>
  </div>
</template>
<script>
import Header from './components/Header'
import AddBlogs from './components/AddBlogs' 
import ShowBlogs from './components/ShowBlogs'
import store from './store/index'
import jwt from 'jsonwebtoken'
export default {
  name: 'App',
  components: {
    Header
  },
  methods:{

    commit(){
        const token = localStorage.getItem('token');
        // decode token
        const jt = jwt.decode(token);
        // save vuex store
        store.dispatch({
          type:'updateUser',
          user:jt
      })
    }
  },
  created(){
    this.commit();
  }
}
</script>

<style>
html,body,#app{
  height: 100%;   

  }
  *{
    margin: 0;padding: 0;
  }
  a{
    text-decoration: none;
    color:rgb(255, 208, 75);
    font-weight: 600;
  }
  .header{
    width: 100%;
    height: 10%;
    background: rgb(63, 61, 61);
  } 
  .header ul{
    height: 100%;
    margin-right:80px;
    float: right;
  }
  .header li{
    display: inline-block;
  }
  .header li a{
    color: #fff;
    text-decoration: none;
    padding: 3px 6px;
    line-height: 100px;
  }
  .footer{
    width: 100%;
    /* height: 30px; */
    background: rgb(63, 61, 61);
  }
  .footer p{
    text-align:center;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 40px;
    color: white;
  }
  .contain{
    height: 100vh;
    width: 100%;
    /* background: rgb(204, 201, 201); */
    padding-bottom: 12px;
    background: url('./assets/bg.jpg') no-repeat;
    background-size: 100%;
  }
</style>
 