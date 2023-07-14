<template>
  <div>
    <div class="container">
      <b-carousel
        class="carrusel"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="20"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <div v-for="destacado in destacados" :key="destacado.title">
          <b-carousel-slide
            class="item-carrusel"
            :caption="destacado.title"
            :img-src="destacado.image"
          >
          </b-carousel-slide>
        </div>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import { mapState} from 'vuex'
export default {
  name: "CarruselVue",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  computed:{
    ...mapState(['destacados'])
  },
};
</script>

<style scoped>
.carrusel {
  margin: 2rem auto;
  width: 75%;
  /* height: 50%; */
}
.item-carrusel{
    width: 100%;
    height: 20rem;
}


</style>