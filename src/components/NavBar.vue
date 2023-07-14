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
        <h1>Tienda DeTodito</h1>
      <router-link to="/carrito">
          <b-button
          ><b-icon
            class="icon-h"
            style="color: #7de1d9"
            font-scale="2"
            icon="cart-fill"
          ></b-icon
        ></b-button>
      </router-link>
      </b-navbar-nav>
    </b-navbar>

    <b-sidebar class="tamaño" id="my-sidebar" title="titulo pagina" shadow>
      <b-button-group vertical class="px-3 py-2">
        <router-link to="/" class="btn1">
          <b-button class="btn1 d-flex justify-content-start" 
            ><b-icon class="mr-1" icon="house-fill"></b-icon>Principal</b-button>
        </router-link>
        <router-link to="/producto/men's-clothing" class="btn1">
          <b-button class="btn1 my-1 d-flex justify-content-start" 
            ><b-icon class="mr-1" icon="person-fill"></b-icon>Ropa Hombre</b-button>
        </router-link>
        <router-link to="/producto/women's-clothing" class="btn1">
          <b-button class="btn1 my-1 d-flex justify-content-start" 
            ><b-icon class="mr-1" icon="person-fill"></b-icon>Ropa Mujer</b-button>
        </router-link>
        <router-link to="/producto/electronics" class="btn1">
          <b-button class="btn1 my-1 d-flex justify-content-start" 
            ><b-icon class="mr-1" icon="cpu-fill"></b-icon>Electronica</b-button>
        </router-link>
      </b-button-group>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1{
  color: #7de1d9;
}
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
