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

    <div id="vue_slideupdown">
        <!-- vuejs-slidemenu -->
        <div class="cls_toggle_expand_collapse" v-on:click="toggleCtrlPanel">
            <i class="fa fa-caret-down"  v-if="slideY"></i>
            <i class="fa fa-caret-right" v-if="!slideY"></i>
            {{textToggle}}
        </div>

        <!-- slideで出てくるようにする -->
        <transition name="slideX">
            <div class="menu_slide_accordion" v-if="slideY">
                slideUp(), slideDown() したい内容を任意に書く。<br>
                純粋なhtmlでも良いし、<br>
                Vueの要素を書いても良い。<br>
            </div>
        </transition>


        <div>
            デモ。<br>
            <br>
            その他の要素。<br>
            この部分は、上部のメニューの開閉に伴ってアップダウンする。<br>
            ※こちらは「スライドアップ、スライドダウンの効果無し版」
        </div>
    </div>




    </div>

</template>


<script>
export default({
    el:"#vue_slideupdown",

    data(){
        return{
            show:true,
            textToggle: "開閉するトグル（ここを押す）",
            slideY: false,
        };
    },
    methods:{
        toggleCtrlPanel: function () {
        this.slideY = !this.slideY;
        }
    }
});
</script>

<style scoped>


.cls_toggle_expand_collapse {
    margin  : 4px;
    padding : 8px;
    cursor  : pointer;
    background-color: aquamarine
}

/*
 * Slide / accordionメニューの設定
 */ 
.menu_slide_accordion {
    background-color: antiquewhite;
    height: 120px;
    overflow: hidden;
}
/* Vueの方で自動的に付与されるクラス::-enter-xx */
.trans_slide-enter-active, .trans_slide-leave-active {
    transition: all 5s;
}
.trans_slide-enter, .trans_slide-leave-to {
    height: 0;
}









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