import Vue from 'vue'
import vueRouter from 'vue-router'
import ShowBlogs from '../components/ShowBlogs'
import AddBlogs from '../components/AddBlogs'
import DetailBlogs from '../components/DetailBlogs'
Vue.use(vueRouter)
let router = new vueRouter({
    routes:[
        {path:'/',component:ShowBlogs},
        {path:'/add',component:AddBlogs},
        {path:'/:id',component:DetailBlogs}   
    ],
    mode:'history'
})
export default router;