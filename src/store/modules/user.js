export default {
    namespaced: true,
    // 当前状态
    state: () => {
        return {
            userinfo: {
                token: '123',
                username: '李四'
            }
        }
    },
    //改变状态，只能同步操作
    mutations: {
        updateName(state, payload) {
            state.userinfo.username = payload;
        }
    },
    //改变状态，可异步操作
    actions: {
        updeteNameAsync(state, payload) {
            setTimeout(() => {
                commit('updateName', payload)
            }, 2000);
        }
    },
    //对状态进行过滤，查询等操作
    getters: {

    }
}