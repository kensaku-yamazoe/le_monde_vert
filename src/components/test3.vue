<template>
    <div class="main">
        
        <button @click="show = !show"><img class="m-5" src="https://picsum.photos/300/300" alt=""></button>

        <transition name="fade" mode="out-in" appear>
            <p v-if='show' key="hello">こんにちわ</p>
            <p v-else key="bye">さようなら</p>
        </transition>

        <transition name="fade" appear>
            <p class="text m-5" v-if="show">Hello</p>
        </transition>

        <transition name="slide" appear>
            <p class="slide-text m-5" v-if="show">Slider</p>
        </transition>


        <transition>
        
        </transition>




    </div>

</template>


<script>
// import Comp1 from './components/Comp1.vue'
// import Comp2 from './components/Comp2.vue'

export default({
    // components:{
    //     Comp1,
    //     Comp2
    // },
    data(){
        return{
            show:true,
            // myComponent: "Comp1",
            // myComponent: "Comp2"
        };
    }
});
</script>

<style scoped>
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: .5s;
}
.fade-enter-to{
    opacity: 1;
}
.fade-leave{
    opacity: 1;
}
.fade-leave-active{
    transition: .5s;
}
.fade-leave-to{
    opacity: 0;
}

.slide-enter,
.slide-leave-to{
    opacity: 0;
}
.slide-enter-active{
    animation:slide-in .5s;
    transition: 0.5s;
}
.slide-leave-active{
    animation:slide-in 0.5s reverse;
    transition: 0.5s;
}


@keyframes slide-in {
    from{
        transform: translateX(200px);
    }
    to{
        transform: rotateX(0);
    }
}

button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
}




</style>