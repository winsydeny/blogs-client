<template>
    <div id="add">
        <h2>Add-Blogs</h2>
        <form v-if="!onsubmit" id="forms">
            <label>Blog-title</label>
            <input type="text" v-model="blog.title"> 
            <label>Blog-Content</label>
            <textarea v-model="blog.content"></textarea>
            <p>还剩:{{ count }}字可输入</p>
            <div id="checkboxes">
                <label>Vue.js</label>
                <input type="checkbox" value="vue.js" v-model="blog.categories">
                <label>Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories">
                <label>React.js</label>                
                <input type="checkbox" value="React.js" v-model="blog.categories">
                <label>Angular4</label>                
                <input type="checkbox" value="Angular4.js" v-model="blog.categories">
            </div>
            <label id="author">Author</label>
            <select v-model="blog.author">
                <option v-for="(item, index) in authors" :key="index">{{ item }}</option>
            </select>
            <button v-on:click.prevent="submit">Add</button>
        </form>  
        <div v-if="onsubmit">
            <h1>Thanks</h1>    
        </div>    
    </div>    
</template>
<script>
import {post} from '../api/axios'
    export default{
        name:'add',
        data(){
            return{
                blog:{
                    title:'',
                    content:'',
                    categories:[],
                    author:'',
                    
                },
                authors:['Kim','Herrny','Sydeny'],
                onsubmit:false,
                alert:false               
            }
        },
        methods:{
            
            submit(){
               
                if(this.blog.title == ''||this.blog.content == ''){
                    alert('error');
                }else{
                     this.onsubmit = true;
                    post('/api/add',this.blog)
                    .then((data)=>{
                        console.log(data);
                    },(err)=>{
                        throw err;
                    })
                }
                
            }
        },
        computed: {
            count(){
                let ct = 100 - this.blog.content.length;

                if(ct < 0){
                   alert("不可输入了");
                }
                else{
                    return ct;
                }
            }
        },
    }
</script>
<style>
#add{ width: 50%;min-width: 300px;margin: 0 auto;padding-top: 20px;}
    #forms label{
        display: block;
        margin: 8px 0 8px 0;
        font-weight: bold;
    }
    #forms input,textarea{
        width: 90%;
        padding: 8px;
        

    }
    #forms textarea{
        height: 200px;
        font-size: 22px;
        font-weight: 600;
    }
    #forms #checkboxes input{
        width: auto;
    }
    #forms #checkboxes label{
        display: inline-block;

        margin-left: 5px;
    }
    #forms #author{
        display: inline-block;
    }
    #forms button{
        display: block;
        width: 60px;
        height: auto;
        padding: 6px;
        border-radius: 3px;
        border: none;
        background: crimson;
        color: #fff;
    }
</style>
