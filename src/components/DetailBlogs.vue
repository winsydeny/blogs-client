<template>
    <div id="detail">
        <div class="main">
            <h1>{{ dblog.title }}</h1><hr style="color:red">
            <p>{{dblog.content}}</p>
            <p>{{dblog.author}}</p>
           <el-row>
               <el-col :span="10"><p class="sort">sort:{{dblog.categories}}</p></el-col>
               <el-col :span="14"><el-button class="sort" style="float:right;margin-right:12px;" type="danger" @click="del">delete</el-button></el-col>
           </el-row>
        </div>
        <div class="comment">
           
            <form>
                <el-row>
                    <el-col class="Comment-title">Comment:</el-col>
                </el-row>
                <textarea v-model="comments.content"></textarea>
                <!-- <input type="button" value="submit" @click="comment"> -->
                <el-row>
                    <el-col :span="20">
                        <el-button type="primary" icon="el-icon-edit" circle></el-button>
                    </el-col>
                <!-- <el-button type="success" icon="el-icon-check" circle></el-button>
                <el-button type="info" icon="el-icon-message" circle></el-button>
                <el-button type="warning" icon="el-icon-star-off" circle></el-button>
                <el-button type="danger" icon="el-icon-delete" circle></el-button> -->
                    <el-col :span="4">
                        <el-button type="success">Comment</el-button>

                    </el-col>
                </el-row>
            </form>
        </div>
    </div>
</template>
<script>
import {remove,get, post} from '../api/axios'
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
                },
                comments:{
                    authorId:this.$route.params.id,
                    content:''
                }
            }
        },
        methods:{
            comment(){
                console.log("commit");
                if(this.comments.content == '') return alert("不能为空");
                post(`/comment/`,this.comments).then((data) => {
                    console.log(data);
                    if(data.status === 200){
                        this.comments.content = "";
                        alert("评论成功");
                    }else{
                        alert("失败");
                    }
                },(err) => {console.log(err);})
              
            },
            goback(){
                this.$router.push({path:'/'});
            },
            del(){
                remove(`/api/detail/?${this.id}`).then((data)=>{
                    
                   alert(data.data);

                   this.goback();
                },(err)=>{
                    throw err;
                })
            },
            getdetail(){
                get(`/api/detail/?${this.id}`)
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
<style lang="scss" scope>
    $mainbg:rgb(192, 188, 188);
    $textareaColor:rgb(0, 179, 15);
    $inputbg:red;
    .main{
        width: 80%;
        min-width: 50%;
        height: auto;
        margin: 0 auto;
        background: $mainbg;
        text-align: center;
        p{
           padding: 10px;
            font-size: 20px; 
        }
        .sort{
            text-align: left;
            margin-top: 100px;
        }
        
    }
    .comment{
        position: relative;
        top: 300px;
        form{
            width: 34%;
            margin: 0 auto;
            height: auto;
            .Comment-title{
                font-size: 26px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                // color:white;
                padding: 10px 0;
            }
            textarea{
                 width: 100%;
                resize: none;
                height: 80px;
                border: none;
                border-radius: 6px;
                outline: none;
                padding: 12px;
                font-size: 23px;
                color:$textareaColor;
            };
            input{
                padding: 6px 12px;
                background: $inputbg;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                float:right;
                outline: none;
            }

        }
    }

</style>

