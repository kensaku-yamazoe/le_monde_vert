// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

Vue.component('accordion'),{
  template:`
  <div class="accordion">

    <div class="header" v-on:click="toggle">
      ヒント
    <!-- <i class="fas fa-chevron-down"></i> -->
    </div>

    <transition v-on:enter="onEnter" v-on:leave="onLeave">
      <div class="body" v-show="show">
          <div class="body-inner">
            ここになんか書く
            <br>
            ２行め
            <br>
            ３ぎょうめ
          </div>
      </div>
    </transition>

  </div>
  `,
  data: function(){
    return{
      show:false
    };
  },
  methods:{
    toggle: function(){
      this.show=!this.show;
    },
    onEnter: function(el,done){
      el.style.display='none';
      $(el).slideDown(300,done);
    },
    onLeave: function(el,done){
      $(el).slideUp(300,done);
    }
  }
},

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
