<template>
  <div id="app">
    <div class="header">
      <ul>
        <li><router-link to="/">All Blogs</router-link></li>
        <li><router-link to="/add">Add Blogs</router-link></li>
      </ul>
    </div>
    <div class="contain">
          <router-view></router-view>
    </div>
    <div class="footer"><p>Copy@2018</p></div>
  </div>
</template>

<script>
import AddBlogs from './components/AddBlogs'
import ShowBlogs from './components/ShowBlogs'


export default {
  name: 'App',
  components: {
    AddBlogs,ShowBlogs
  }
}
</script>

<style>
html,body,#app{
  height: 100%;
  /* overflow: hidden; */
}
  *{
    margin: 0;padding: 0;
  }
  a{
    text-decoration: none;
    color: rgb(190, 57, 57);
    font-weight: 600;
  }
  .header{
    width: 100%;
    height: 10%;
  } 
  .header ul{
    height: 100%;
    background: rgb(63, 61, 61);
    /* position: fixed; */
    /* top: 0; */
  }
  .header li{
    display: inline-block;
  }
  .header li a{
    position:absolute;
    right: 30px;
    color: #fff;
    text-decoration: none;
    padding: 3px 6px;
    border-radius: 6px;
    border: 1px solid  rgb(231, 2, 2);
    background: rgb(231, 2, 2);
  }
  .header li:nth-child(1) a{
      right: 130px;
  }
  .header .router-link-exact-active{
    background: rgb(136, 3, 3);
  }
  .footer{
    width: 100%;
    height: 5%;
      /* position: absolute;
      bottom: 0; */
    background: rgb(63, 61, 61);
  }
  .footer p{
    text-align:center;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 40px;
    color: white;
  }
  .contain{
    height: 85%;
    width: 100%;
    background: rgba(184, 167, 167,.6);
   
  }
</style>
 