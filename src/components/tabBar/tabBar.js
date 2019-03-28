import tabBarComponent from './tabBar.vue'

const tabBar = {
    install:function(Vue){
        Vue.compoent('tabBar',tabBarComponent)
    }
}

export default tabBar