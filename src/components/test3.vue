<template>
    <div>

        <div id="example-2">
        <!-- `greet` は、あらかじめ定義したメソッドの名前 -->
        <button v-on:click="greet">触るな</button>
        </div>

    </div>

</template>


<script>
export default({
    el: '#example-2',
    data: {
    name: 'test3.js'
    },
  // `methods` オブジェクトの下にメソッドを定義する
    methods: {
    greet: function (event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
        alert('Hello ' + this.name + '!')
      // `event` は、ネイティブ DOM イベントです
        if (event) {
        alert(event.target.tagName)
        }
    }
    }
})

</script>