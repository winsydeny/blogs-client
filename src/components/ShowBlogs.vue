<template>
    <div id="showblogs">
        <h2 v-rainbow:column="'theme'">showblogs</h2>
        <input type="text" placeholder="Search" v-model="search">
        <div v-for="(item, index) in getFilter" :key="index">
            <router-link :to="'/'+item._id">{{ item.title | toUpperCase}}</router-link>
            <p>{{ item.content | limit }}</p>
        </div>
        <div v-if="shows">暂无数据</div>
    </div>
</template>
<script>
import {get} from '../api/axios'

export default {
  name: "showblogs",
  data(){
    return {
      list: [],
      search:'',
      shows:false
    };
  },
  methods: {
    showlist() {
        // get('/').then((data)=>{console.log(data)})
        get('/').then((data)=>{
            if(data.data.length === 0){
                this.shows = true;
            }else{
                this.shows = false;
                this.list = data.data;
            }
        },(err)=> { throw err; })
    },

  },
  computed:{
      getFilter(){
        let store = this.list.filter((blog)=>{  
                console.log(blog.title.match(this.search));
                return blog.title.match(this.search);
          });
          if(store.length == 0){
              this.shows = true;
          }else{
              this.shows = false;
          return store;
          }

      }
  },
  filters:{
      toUpperCase(value){
          return value.toUpperCase();
      },
      limit(value){
          if(value.length>=10){
              return `${value.slice(0,10)}...`;
          }else{
              return value;
          }
      }
  },
  created() {
    this.showlist();
  }
};
</script>
<style scoped>
    #showblogs{
        width: 60%;
        min-width: 300px;
        margin: 0 auto;
    }
    #showblogs h2{
        text-align: center;
        /* margin: 8px; */
        padding: 0 6px 6px 6px;
    }
    #showblogs div h4{
        padding: 6px;
        margin: 2px;
    }
    #showblogs div{
        background: #dddddd;
        margin: 6px 6px 0 6px;

    }
    #showblogs div p{
        padding: 4px;
        word-spacing: 2px;
        text-align: left;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    }
    a{
        text-align: left;
    }
</style>

