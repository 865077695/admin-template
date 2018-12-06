import Layout from '@/layout/index';
export const routes = [
    { path: '/', redirect: '/content' },
    { path: '/login', component: () => import("@/views/login/login") },
    {
        path: '/content', component: Layout, redirect: '/content/gene-code', children: [
            { path: 'gene-code', name: '代码生成', component: () => import("@/views/gene-code/gene-code") },
            { path: 'device', name: '设备列表', component: () => import("@/views/device/device") },
            { path: 'orders', name: '订单列表', component: () => import("@/views/orders/orders") },
            {
                path: 'system', redirect: 'system/role',component: () => import("@/layout/main"), name: '系统设置', children: [
                    {path: 'role', name: '角色管理', component: () => import("@/views/system/role/role")},
                    {path: 'account', name: '角色管理', component: () => import("@/views/system/account/account")}
                ]
            }
        ]
    }
]