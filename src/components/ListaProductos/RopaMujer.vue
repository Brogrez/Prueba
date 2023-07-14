<template>
  <div class="container d-flex flex-wrap justify-content-between">
    <div v-for="producto in productos" :key="producto.id" class="my-3">
      <b-card
        
        no-body
        style="max-width: 20rem"
        :img-src="producto.image"
        img-alt="Image"
        img-top
      >
        <template #header>
          <h4 class="mb-0 descripcion">{{producto.title}}</h4>
        </template>

        <b-list-group flush>
          <b-list-group-item class="descripcion">{{producto.description}}</b-list-group-item>
          <b-list-group-item >${{producto.price}}</b-list-group-item>
          <b-button @click="agregar(producto)"><b-icon icon="cart-fill"></b-icon>Agregar</b-button>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Ropa-Mujer",
  data() {
    return {
        productos: []
    };
  },
  methods: {
    ...mapActions(["addProductCart"]),
    agregar(producto) {
      let item = {
        id: producto.id,
        nombre: producto.title,
        precio: producto.price,
        count: 1,
      };
      this.addProductCart(item);
      console.log(item);
    },
    async electronicFetch() {
      try {
        this.loading = true;
        let response = await fetch(`/ropaMujer.json`);
        let json = await response.json();
        this.productos = json;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created(){
    this.electronicFetch()
  }
};
</script>

<style scoped>
img{
    height: 15rem;
}
.descripcion {
      width: 20rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
}
</style>