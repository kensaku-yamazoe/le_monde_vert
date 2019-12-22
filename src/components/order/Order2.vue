<template>
  <div class="container">
    <div class="order-left-contents">
      <h1 class="order-num">no.2</h1>
      <p class="order-text">
        パーソナルカラーの診断
        <br>
        ファッションテイスト診断
        <br>
        ＊料金が発生いたします¥10000-
        </p>
    </div>
    <div class="order-right-img"></div>
  </div>
</template>

<style scoped>
.container{
  position: relative;
  display: flex;
  margin: 100px 0;
}
.order-left-contents{
  position: absolute;
  left: 380px;
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
  margin:0 0 0 auto;
  width: 500px;
  height: 500px;
  background-color: #efeee8d1;
}
</style>