<template>
    <div id="detail">
        <div class="main">
            <h1>{{ dblog.title }}</h1><hr style="color:red">
            <p>{{dblog.content}}</p>
            <p>{{dblog.author}}</p>
            <p>sort:{{dblog.categories}}</p>
            <button @click="del">delete</button>
        </div>
        <div class="comment">
            <form>
                <textarea></textarea>
                <input type="button" value="submit">
            </form>
        </div>
    </div>
</template>
<script>
import {remove,get} from '../api/axios'
    export default {
        name:'detail',
        data(){
            return {
                id:this.$route.params.id,
                dblog:{
                    title:'',
                    content:'',
                    author:'',
                    categories:''
                }
            }
        },
        methods:{
            goback(){
                this.$router.push({path:'/'});
            },
            del(){
                remove(`/detail/?${this.id}`).then((data)=>{
                    alert("has been deleted!")
                   this.goback();
                },(err)=>{
                    throw err;
                })
            },
            getdetail(){
                get(`/detail/?${this.id}`)
                .then((data)=>{
                    console.log(data.data);
                    this.dblog.title = data.data[0].title;
                    this.dblog.content = data.data[0].content;
                    this.dblog.author = data.data[0].author;
                    this.dblog.categories = data.data[0].categories[0];
                },(err)=>{
                    throw err;
                })
            }
        },
        created() {
            this.getdetail();
        },
    }
</script>
<style scoped>
  
    
    .main{
        width: 80%;
        min-width: 50%;
        height: auto;
        margin: 0 auto;
        background: gray;
    }
    h1{
        text-align: center;
    }
    p{
        padding: 10px;
        font-size: 20px;
        text-align: center;
    }
    .comment form{
        width: 34%;
        margin: 0 auto;
        height: auto;
    }
    .comment form textarea{
        width: 100%;
        resize: none;
        height: 80px;
        border: none;
        border-radius: 6px;
        outline: none;
        padding: 12px;
        font-size: 23px;
        color: rgb(0, 179, 15);

    }
    .comment form input{
        padding: 6px 12px;
        background: red;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float:right;
        outline: none;
    }

</style>

