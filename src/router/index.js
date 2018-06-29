import Vue from 'vue'
import Router from 'vue-router'
import TeacherList from '@/components/TeacherList'
import Detail from '@/components/TeacherDetail'
import Next from '@/components/Next'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'list',
            component: TeacherList
        },
        {
            path: '/:id',
            name: 'detail',
            component: Detail
        },
        {
            path: '/next/:id',
            name: 'next',
            component: Next
        }
    ]
})
