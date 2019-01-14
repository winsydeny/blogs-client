import Vue from 'vue'
import vueRouter from 'vue-router'
import ShowBlogs from '../components/ShowBlogs'
import AddBlogs from '../components/AddBlogs'
import DetailBlogs from '../components/DetailBlogs'
import About from '../components/About'
import Login from '../view/Login'
import Register from '../view/Register'
import Categories from '../view/Categories'
Vue.use(vueRouter)
let router = new vueRouter({
    routes:[
        {
            path:'/',
            name:'showblogs',
            component:ShowBlogs
        },
        {
            path:'/user/add',
            name:'add',
            component:AddBlogs
        },
        {
            path:'/categories',
            name:'categories',
            component:Categories
        },
        {
            path:'/about',
            name:'about',
            component:About
        },
        {
            path:'/login',
            name:'Login',
            component:Login
        },
        {
            path:'/register',
            name:'register',
            component:Register
        },
        
        {
            path:'/:id',
            name:'detailblogs',
            component:DetailBlogs
        },
        
        
        
    ],
    mode:'history'
})
export default router;