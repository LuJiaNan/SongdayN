import Link from './router-link'
import View from './router-view'
import Router from 'vue-router'
let Vue;
class VueRouter extends Router{
    constructor(options) {
        super()
        this.$options = options;
        Vue.util.defineReactive(this, 'current', '/')
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))

        this.routeMap = {}
        this.$options.routes.forEach(route => {
            this.routeMap[route.path] = route
        })
    }

    onHashChange(){
        this.current = window.location.hash.slice(1)
    }

    pushRoute(obj){
        this.current = obj.path
        this.history.push(obj.path)
    }
}


VueRouter.install = function(_Vue) {
    Vue = _Vue

    Vue.mixin({
        beforeCreate(){
            if(this.$options.router){
                Vue.prototype.$router = this.$options.router
            }
        }
    })

    Vue.component('router-link',Link)
    Vue.component('router-view',View)
}

export default VueRouter