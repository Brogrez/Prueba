<template>
  <div>
    <b-navbar type="dark" class="d-flex nav-color">
      <b-navbar-nav class="justify-content-between w-100">
        <b-button v-b-toggle.my-sidebar
          ><b-icon
            class="icon-h"
            style="color: #7de1d9"
            font-scale="2"
            icon="bar-chart-steps"
          ></b-icon
        ></b-button>
        <h1>Titulo Pagina web</h1>
        <b-button
          ><b-icon
            class="icon-h"
            style="color: #7de1d9"
            font-scale="2"
            icon="cart-fill"
          ></b-icon
        ></b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar class="tamaño" id="my-sidebar" title="titulo pagina" shadow>
      <b-button-group vertical class="px-3 py-2 d-flex justify-content-center">
        <router-link to="/" class="btn1">
          <b-button class="btn1"
            ><b-icon icon="house-fill"></b-icon>Principal</b-button>
        </router-link>
        <router-link to="/Productos" class="btn1">
          <b-button class="btn1 my-1"
            ><b-icon icon="basket2-fill"></b-icon>Productos</b-button>
        </router-link>
      </b-button-group>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* NAVBAR */
.nav-color {
  background-color: #615e5b;
}
/*SIDEBAR*/
#my-sidebar {
  width: 15rem;
}
.btn-sidebar {
  background-color: #615e5b;
}
.btn1{
  width: 100%;
}
</style>
