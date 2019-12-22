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
    <Order3></Order3>
    <Order4></Order4>
    <Order5></Order5>
</div>

</template>

<script>
import Order1 from '../components/order/Order1.vue'
import Order2 from '../components/order/Order2.vue'
import Order3 from '../components/order/Order3.vue'
import Order4 from '../components/order/Order4.vue'
import Order5 from '../components/order/Order5.vue'
export default {
    components:{
        Order1,
        Order2,
        Order3,
        Order4,
        Order5,
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