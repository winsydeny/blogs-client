<template>
    <div id="showblogs">
        <h2 v-rainbow:column="'theme'">showblogs</h2>
        <el-input type="text" placeholder="Search" v-model="search"></el-input>
         
        <div v-for="(item, index) in getFilter" :key="index" class="list">
            <router-link :to="'/'+item._id">{{ item.title | toUpperCase}}</router-link>
            <el-tag type="success">{{item.categories[0]}}</el-tag>
            <p>{{ item.content | limit }}</p>
            <p class="list-time">{{ item.createTime }}</p>
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
        get('/api/total_list').then((data)=>{
            console.log(data);
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
                // console.log(blog.title.match(this.search));
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
          if(value.length>=60){
              return `${value.slice(0,60)}...`;
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
        width: 40%;
        min-width: 300px;
        margin: 0 auto;
    }
    .tag{
        margin: 10px 0;
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
    #showblogs .list{
        background: #648499;
        /* border:.6px solid rgb(6, 100, 189); */
        /* border-radius: 10px; */
        padding: 12px 0;
        margin-top: 6px;
        opacity: .97;

    }
    #showblogs .list .list-time{
        text-align: right;
    }
    #showblogs div p{
        padding: 10px;
        word-spacing: 2px;
        text-align: left;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;

    }
    a{
        text-align: left;
    }
</style>

