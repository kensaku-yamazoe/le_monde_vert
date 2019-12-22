<template>
  <div class="container">
    <div class="order-left-img"></div>
    <div class="order-right-contents col-auto">
      <h1 class="order-num">{{number}}</h1>
      <p class="order-text">
        {{text1}}
        <br>
        {{text2}}
        <br>
        <span class="underbar">caution</span>
        <br>
        {{caution}}
        <br>
        <div class="price" v-html="price"></div>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      number: 'no.5',
      text1: '型紙作成',
      text2: 'ファッションテイスト診断',
      caution: '＊料金が発生いたします',
      price: 'ジャケット、ワンピース ¥40000-<br>パンツ、スカート、ブラウス ￥20000-'
    }
  }
}
</script>

<style scoped>
.container{
  position: relative;
  display: flex;
  margin: 200px 0;
  color: #b9b9b9;
  text-align: left;
}
.underbar{
  border-bottom: 1px solid #b9b9b9;
}
.order-left-img{
  width: 500px;
  height: 500px;
  background-color: #efeee8d1;
}
.order-right-contents{
  position: absolute;
  left: 440px;
}
.order-num{
  font-size: 120px;
  border-bottom: 1px solid #b9b9b9;
}
.order-text{
  margin-top: 50px;
}
</style>