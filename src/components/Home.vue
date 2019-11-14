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
      <h1 class="m-2">Parsonal color Sample</h1>
      <h6 class="mb-5">あなたに似合う色はどれですか？</h6>
      <div class="sample-image mb-5">
          <img src="https://picsum.photos/1200/300" class="spring-img img-fluid" alt="">
          <div class="sample-image-text">spring</div>
      </div>

      <div class="sample-image mb-5">
          <img src="https://picsum.photos/1200/300" class="summer-img img-fluid" alt="">
          <div class="sample-image-text">summer</div>
      </div>

      <div class="sample-image mb-5">
          <img src="https://picsum.photos/1200/300" class="autumun-img img-fluid" alt="">
          <div class="sample-image-text">autumn</div>
      </div>

      <div class="sample-image mb-5">
          <img src="https://picsum.photos/1200/300" class="winter-img img-fluid" alt="">
          <div class="sample-image-text">winter</div>
      </div>
    </div>

  </div>

</template>



<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'おしゃれ心を呼び覚ます色彩の魅力、今までにないアプローチでお似合いのお洋服をご提案いたします。'
    }
  }
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
  top: 50%;
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
</style>
