<template>
    <div id="add">
        <h2>Add-Blogs</h2>
        <form v-if="!onsubmit" id="forms">
            <label>Blog-title</label>
            <input type="text" v-model="blog.title"> 
            <label>Blog-Content</label>
            <textarea v-model="blog.content"></textarea>
            <p style="text-align:right">Already Enter {{ count }} words</p>
            <el-row id="checkboxes">
                <!-- <label>Vue.js</label> -->
                <!-- <input type="checkbox" value="vue.js" v-model="blog.categories"> -->
                <el-row><p>Categories:</p></el-row>
                <el-col>
                 <el-checkbox v-model="blog.categories" label="Vue.js"></el-checkbox>
                 <el-checkbox v-model="blog.categories" label="Node.js"></el-checkbox>
                 <el-checkbox v-model="blog.categories" label="React.js"></el-checkbox>
                 <el-checkbox v-model="blog.categories" label="Angular 4"></el-checkbox>
                </el-col>
                <!-- <label>Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories">
                <label>React.js</label>                
                <input type="checkbox" value="React.js" v-model="blog.categories">
                <label>Angular4</label>                
                <input type="checkbox" value="Angular4.js" v-model="blog.categories"> -->
            </el-row>
            <label id="author">Author</label>
            <!-- <select v-model="blog.author">
                <option v-for="(item, index) in authors" :key="index">{{ item }}</option>
            </select> -->
             <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button v-on:click.prevent="submit" type="success">success</el-button>
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
                 options: [{
                    value: '选项1',
                    label: 'Tim'
                    }, {
                    value: '选项2',
                    label: 'Jack'
                    }, {
                    value: '选项3',
                    label: 'Jason'
                    }, {
                    value: '选项4',
                    label: 'Sydeny'
                    },],
                value:'',
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
                let ct = this.blog.content.length;

               return ct;
            },
        
        },
    }
</script>
<style lang="scss">
#add{ width: 50%;min-width: 300px;margin: 0 auto;padding-top: 20px;}
    #forms label{
        display: block;
        margin: 8px 0 8px 0;
        font-weight: bold;
    }
    #forms input,textarea{
        width: 100%;
        padding: 8px;
        resize: none;
    }
    #forms textarea{
        height: 600px;
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
    
</style>
