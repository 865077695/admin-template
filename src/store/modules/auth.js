import { getNav } from '../api'
const auth = {
    state: {
        menus: [],
        funcs: false,   // 是否登录
    },
    mutations: {
        setMenu(state, menuList){
            state.menus = menuList;
        }
    },
    actions: {
        // getNavList({ commit, state }) {
        // state.navLoading = true
        // getNav().then(res => {
        //     state.navLoading = false
        //     commit('setTopNav', res.menuList)
        //     commit('setLeftNav');
        // })
        // }
        getNav({commit}){
            getNav().then(res => {
                console.log(res)
                if(res.code === 0){
                    commit('setMenu', res.menuList)
                }
            })
        }
    }
}

export default auth