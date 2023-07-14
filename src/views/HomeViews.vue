<template>
  <div>
    <CarruselVue />
    <TypeProduct />
  </div>
</template>

<script>
import CarruselVue from "@/components/Carruselvue.vue"
import TypeProduct from "@/components/TypeProductCard.vue"
import { mapActions } from 'vuex'
export default {
  name: "HomeViews",
  components:{
    CarruselVue,
    TypeProduct
  },
  methods:{
    ...mapActions(['homeFetch'])
  },
  created(){
    this.homeFetch()
  }
}
</script>

<style>
body {
  background-color: #e8f2f1;
}
</style>
