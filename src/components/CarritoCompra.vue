<template>
  <div class="container">
    <table class="bordes tabla">
      <tr class="bordes">
        <th class="px-4">ID producto</th>
        <th class="px-4">Nombre</th>
        <th class="px-4">Cantidad</th>
        <th class="px-4">precio</th>
        <th class="px-4">Descuento</th>
        <th class="px-4">Subtotal</th>
        <th class="px-4">Acciones</th>
      </tr>
      <tr class="bordes" v-for="item in carrito" :key="item.id">
        <td class="px-4 font-weight-bold">{{ item.id }}</td>
        <td class="px-4 font-weight-bold">{{ item.nombre }}</td>
        <td class="px-4 font-weight-bold">{{ item.count }}</td>
        <td class="px-4 font-weight-bold">${{ item.precio }}</td>
        <td class="px-4 font-weight-bold">{{subTotal(item.count, item.precio) < 500 ? '5%' : '11%' }}</td>
        <td class="px-4 font-weight-bold">
          ${{ subTotal(item.count, item.precio) }}
        </td>
        <button class="btn" @click="confirmDelete(item)">
          <b-icon icon="trash-fill" variant="danger"></b-icon>
        </button>
      </tr>
    </table>
    <div class="d-flex justify-content-center">
      <b-button
        @click="openCreateModel()"
        class="botonModal p-3 font-weight-bold"
        variant="primary"
        ><b-icon icon="credit-card2-back-fill"></b-icon> total a pagar ${{
          precioTotalProducto
        }}</b-button
      >
    </div>

    <modalCreate />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import modalCreate from "./ModalCreate.vue";
export default {
  name: "Tabla-carrito",
  components: {
    modalCreate,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["precioTotalProducto"]),
  },
  methods: {
    ...mapActions(["eliminarProducto"]),
    subTotal(cantidad, precio) {
      let subTotal = cantidad * precio;
      if (subTotal < 500) {
        const descuento = subTotal * 0.05;
        subTotal -= descuento;
      }else{
        const descuento = subTotal * 0.11; 
        subTotal -= descuento;
      }
      return subTotal.toFixed(2)
    },
    descuento() {

    },
    openCreateModel() {
      this.$bvModal.show("modalCreate");
    },
    confirmDelete(prod) {
      this.$swal
        .fire({
          title: `esta seguro que quiere eliminar este producto de la lista?`,
          text: "",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, Eliminar!",
          cancelButtonText: "No, Cancelar!",
        })
        .then((result) => {
          console.log(result);
          if (result.isConfirmed) {
            this.clear(prod);
            this.$swal.fire(
              "Eliminado!",
              "el producto fue quitado de la lista",
              "success"
            );
          }
        });
    },
    clear(prod) {
      this.eliminarProducto(prod);
    },
  },
};
</script>

<style scoped>
.tabla {
  margin: 1rem auto;
  margin-top: 1rem;
}
.bordes {
  border: 1px solid black;
}
.btn:hover {
  background-color: #8443ac;
}
.span {
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: #00c853;
  color: white;
}
.botonModal {
  margin-bottom: 20rem;
}
</style>
