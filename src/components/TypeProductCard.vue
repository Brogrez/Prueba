<template>
  <div class="container d-flex justify-content-between">
    <div v-for="producto in tiposProductos" :key="producto.name">
      <b-card
        :title="producto.name"
        :img-src="producto.image"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{producto.text}}
        </b-card-text>
        <b-button @click="redirectTo(producto.name)" variant="primary">Ver Mas</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
    name:"TypeProduct",
    computed:{
        ...mapState(['tiposProductos'])
    },
    methods:{
        redirectTo(name){
          this.$router.push(`/producto/${name}`)
        }
    },
};
</script>

<style>
img{
    height: 15rem;
}
</style>
