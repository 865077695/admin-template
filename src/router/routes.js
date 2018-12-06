import Layout from '@/layout/index';
export const routes = [
    {
        path: '/login', component: () => import("@/views/login/login")
    },{
        path: '/main', name: '首页', component: Layout
    }
]