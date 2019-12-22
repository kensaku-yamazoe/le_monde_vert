<template> 
  <div class=header>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" class="logo-img ml-5"/>
      </router-link>
    </div>
    <nav class="navbar navbar-expand-lg navber-right">
        
            <ul class="navbar-nav mr-5">


            <li class="nav-item">
                <router-link
                class="px-4"
                to="/"
                active-class="link--active"
                exact
                >
                home
                </router-link>
            </li>

            <li class="nav-item">
                <router-link 
                class="px-4" 
                to="/Order"
                active-class="link--active"
                exact
                >
                Order
                </router-link>
            </li>

            <li class="nav-item">
                <router-link 
                class="px-4" 
                to="/Contact"
                active-class="link--active"
                exact
                >
                Contact
                </router-link>
            </li>

            <li class="nav-item">
              <a class="px-4" active-class="link--active" exact>what</a>
            </li>


            </ul>
 
    </nav>
  </div>
</template>

<style scoped>
  .header{
    padding-top: 30px;
    background-color: #efeee8d1;
    z-index: 3;
  }
  .logo{
    margin: 0 auto;
    height:100px;
  }
  .logo-img{
    height: 100px;
    float:left;
  }
  li{
    color: #b9b9b9;
  }
  .link--active{
    border-bottom: 1px solid #b9b9b9;
  }
  a{
    text-decoration: none;
  }
</style>