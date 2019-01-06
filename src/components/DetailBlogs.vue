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
                <textarea v-model="comments.content"></textarea>
                <input type="button" value="submit" @click="comment">
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
<style lang="scss" scope>
    $mainbg:gray;
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
        
    }
    .comment{
        form{
            width: 34%;
            margin: 0 auto;
            height: auto;
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

