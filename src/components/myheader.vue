<template> 
  <div>
    <div class="logo mt-3">
      <router-link to="/">
        <img src="@/assets/logo.png" class="logo-img pull-left"/>
      </router-link>
    </div>
    <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mr-5">
            <li class="nav-item">
                <router-link class="col-2 px-4" to="/">home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="px-4" to="/test1">Order</router-link>
            </li>
            <li class="nav-item">
                <router-link class="px-4" to="/test2">test2</router-link>
            </li>
            <li class="nav-item">
                <router-link class="px-4" to="/test3">test3</router-link>
            </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<style>
  .logo{
    height:100px;
  }
  .logo-img{
    height: 100px;
  }
</style>