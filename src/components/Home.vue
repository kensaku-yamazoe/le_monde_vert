<template>

  <div class="home">

    <div class="hello">
      <h6 class="m-4">{{ msg }}</h6>
      <img src="https://picsum.photos/1200/400" alt="">
    </div>

    <div class="text">
      
    </div>

    <div class="sample mt-5">
      <h1 class="m-2">Parsonal color Sample</h1>
      <h6 class="mb-5">あなたに似合う色はどれですか？</h6>
      <div class="sample-image mb-5">
          <img src="https://picsum.photos/1200/300" class="img-fluid" alt="">
          <div class="sample-image-text">spring</div>
      </div>

      <div class="sample-image mb-5">
          <img src="https://picsum.photos/1200/300" class="img-fluid" alt="">
          <div class="sample-image-text">summer</div>
      </div>

      <div class="sample-image mb-5">
          <img src="https://picsum.photos/1200/300" class="img-fluid" alt="">
          <div class="sample-image-text">autumn</div>
      </div>

      <div class="sample-image mb-5">
          <img src="https://picsum.photos/1200/300" class="img-fluid" alt="">
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
</style>
