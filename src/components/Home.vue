<template>

  <div class="home">

    <transition name="fade" appear>
      <div class="hello">
        <h6 class="m-4">{{ msg }}</h6>
        <img src="@/assets/IMG_7343-3.jpg" class="main-img img-fluid" alt="">
      </div>
    </transition>

    <div class="text">
      <h1 class="sample mb-5">sample message</h1>
      <p>たくしのこんなさびしい考は</p>
      <p>みんなよるのためにでるのだ</p>
      <p>夜があけて海岸へかかるなら</p>
      <p>そして波がきらきら光るなら</p>
      <p>なにもかもみんないいかもしれない</p>
    </div>


    <div class="sample mt-5">
      <h1>Which is Your Color?</h1>
      <h6 class="mt-5 mb-5">あなたに似合う色はどれですか？</h6>

      <div class="sample-image mt-5 mb-5" v-on:click="toggle">
          <img src="https://picsum.photos/1200/300" class="image img-fluid" id="spring" alt="">
          <div class="sample-image-text">spring</div>

          <transition v-on:enter="onEnter" v-on:leave="onLeave">
            <div class="image-inner" v-show="show">
              <img class="inner-image" src='https://lh3.googleusercontent.com/pWb5099uK2qCyjbIvipTd7gSlaKmnLIkadMSBw4-uN7q9QW2M8sQ60mLHmD96YcPqwi9RIPoitHk4mzxTxoE_8sRQt8cdZ_eXXk27pH1rAVLFCZJSbV1-nbrVld0GF9wxRJBCd3zHn4=w2400'>
                <div class="image-inner-text">
                  春っぽい文章
                </div>
            </div>
          </transition>
      </div>

      <div class="sample-image mt-5 mb-5" v-on:click="toggle">
          <img src="https://picsum.photos/1200/300" class="image img-fluid" id="summer" alt="">
          <div class="sample-image-text">summer</div>

          <transition v-on:enter="onEnter" v-on:leave="onLeave">
            <div class="image-inner" v-show="show">
              <img class="inner-image" src='https://lh3.googleusercontent.com/pWb5099uK2qCyjbIvipTd7gSlaKmnLIkadMSBw4-uN7q9QW2M8sQ60mLHmD96YcPqwi9RIPoitHk4mzxTxoE_8sRQt8cdZ_eXXk27pH1rAVLFCZJSbV1-nbrVld0GF9wxRJBCd3zHn4=w2400'>
                <div class="image-inner-text">
                  春っぽい文章
                </div>
            </div>
          </transition>
      </div>



      <div class="sample-image mt-5 mb-5" v-on:click="toggle">
          <img src="https://picsum.photos/1200/300" class="image img-fluid" id="autumn" alt="">
          <div class="sample-image-text">autumn</div>

          <transition v-on:enter="onEnter" v-on:leave="onLeave">
            <div class="image-inner" v-show="show">
              <img class="inner-image" src='https://lh3.googleusercontent.com/pWb5099uK2qCyjbIvipTd7gSlaKmnLIkadMSBw4-uN7q9QW2M8sQ60mLHmD96YcPqwi9RIPoitHk4mzxTxoE_8sRQt8cdZ_eXXk27pH1rAVLFCZJSbV1-nbrVld0GF9wxRJBCd3zHn4=w2400'>
                <div class="image-inner-text">
                  春っぽい文章
                </div>
            </div>
          </transition>
      </div>



      <div class="sample-image mt-5 mb-5" v-on:click="toggle">
          <img src="https://picsum.photos/1200/300" class="image img-fluid" id="winter" alt="">
          <div class="sample-image-text">winter</div>

          <transition v-on:enter="onEnter" v-on:leave="onLeave">
            <div class="image-inner" v-show="show">
              <img class="inner-image" src='https://lh3.googleusercontent.com/pWb5099uK2qCyjbIvipTd7gSlaKmnLIkadMSBw4-uN7q9QW2M8sQ60mLHmD96YcPqwi9RIPoitHk4mzxTxoE_8sRQt8cdZ_eXXk27pH1rAVLFCZJSbV1-nbrVld0GF9wxRJBCd3zHn4=w2400'>
                <div class="image-inner-text">
                  春っぽい文章
                </div>
            </div>
          </transition>
      </div>

      <div class="sample-image mt-5 mb-5">
          <img src="https://picsum.photos/1200/300" class="image img-fluid" id="spring" alt="">
          <div class="sample-image-text">summer</div>
      </div>

      <div class="sample-image mt-5 mb-5">
          <img src="https://picsum.photos/1200/300" class="image img-fluid" id="spring" alt="">
          <div class="sample-image-text">autumn</div>
      </div>

      <div class="sample-image mt-5 mb-5">
          <img src="https://picsum.photos/1200/300" class="image img-fluid" id="spring" alt="">
          <div class="sample-image-text">winter</div>
      </div>
    </div>

  </div>

</template>



<script>
import Comp1 from './Comp1.vue';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'おしゃれ心を呼び覚ます色彩の魅力、今までにないアプローチでお似合いのお洋服をご提案いたします。',
      show: false
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
    },
  },
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: 2s;
}
.fade-enter-to{
    opacity: 1;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
    transition: 2s;
}
.fade-leave-to{
    opacity: 0;
}


h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.sample{
  margin-top: 100px;
}
.sample-image{
  position: relative;
}
.sample-image-text{
  position: absolute;
  font-size: 60px;
  top: 130px;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
}

.main-img{
  height:500px;
  width:1200px;
  object-fit:cover;
}

.image-inner{
  background-color: beige;
  display: flex;
}
.image-inner-text{
  margin-top: 50px;
}
.image:hover{
  opacity: 0.6;
  transition: .5s;
}

.inner-image{
  height: 200px;
  width: 200px;
  margin: 50px;
}
</style>
