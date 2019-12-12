<template>
  <div id="page-top">
    <i class="fas fa-sort-up" id="arrow"></i>
  </div>
</template>

<style scaped>
  #page-top{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #70707017;
    position: fixed;
    z-index: 10;
    right: 100px;
    top: 500px;
    transition: .5s;
    color: rgba(255, 255, 255, 1.0);
  }
  #page-top:hover{
    transition: .5s;
        background-color: #707070;
  }

  #arrow{
    font-size: 2rem;
    padding-top: 20px;
  }
</style>