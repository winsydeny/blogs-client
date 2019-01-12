import Vue from 'vue'
import vueRouter from 'vue-router'
import ShowBlogs from '../components/ShowBlogs'
import AddBlogs from '../components/AddBlogs'
import DetailBlogs from '../components/DetailBlogs'
import About from '../components/About'
import Login from '../view/Login'
import Register from '../view/Register'
Vue.use(vueRouter)
let router = new vueRouter({
    routes:[
        {path:'/',component:ShowBlogs},
        {path:'/add',component:AddBlogs},
        {path:'/about',component:About},
        {path:'/login',component:Login},
        {path:'/register',component:Register},
        {path:'/:id',component:DetailBlogs},
        
    ],
    mode:'history'
})
export default router;