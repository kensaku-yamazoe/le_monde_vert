<template>
  <div class="container">
    <div class="order-left-contents">
      <h1 class="order-num">{{number}}</h1>
      <p class="order-text">
        {{text1}}
        </p>
    </div>
    <div class="order-right-img"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      number: 'no.4',
      text1: '型紙作成のための採寸',
    }
  }
}
</script>

<style scoped>
.container{
  /* position: right; */
  display: flex;
  width: 100vw;
  /* height: 100%; */
}
.order-left-contents{
  position: absolute;
  right: 520px;
}
.order-num{
  font-size: 120px;
  color: #b9b9b9;
  text-align: left;
  border-bottom: 1px solid #b9b9b9;
}
.order-text{
  margin-top: 50px;
  color: #b9b9b9;
  text-align: left;
}
.order-right-img{
  /* position: absolute; */
  margin: 0 0 0 auto;
  width: 500px;
  height: 500px;
  background-color: #efeee8d1;
}
</style>