<template>

<div class="order">
    <div class="background">
        <h1>Order</h1>
        背景は写真
    </div>
    <h2>Custom Order</h2>
    <p></p>
    <Order1></Order1>
    <Order2></Order2>
</div>

</template>

<script>
import Order1 from '../components/order/Order1.vue'
import Order2 from '../components/order/Order2.vue'
export default {
    components:{
        Order1,
        Order2,
    }
}
</script>

<style scoped>
h2{
    color:#b9b9b9;
    font-size: 80px;
    margin: 200px 0;
}
.background{
    width: 100%;
    height: 400px;
    background-color: aquamarine;
}
</style>