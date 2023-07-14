<template>
  <div>
    <b-modal ref="my-modal" id="modalCreate" hide-footer hide-header-close>
      <b-form @submit="onSubmit" v-if="show">
        <b-form-group id="input-group-1" label="Nombre" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            placeholder="introduzca el nombre"
            required
          ></b-form-input>

        </b-form-group>
        <b-form-group id="email" label="E-mail" label-for="input-1">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="introduzca el email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="repitEmail"
          label="Repetir E-mail"
          label-for="input-1"
        >
          <b-form-input
            id="repitEmail"
            v-model="form.repiteEmail"
            type="email"
            placeholder="repetir"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" label="Telefono" label-for="input-1">
          <b-form-input
            id="input-1"
            type="number"
            placeholder="+569 xxxxxxxx"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Direccion" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Comuna" label-for="input-1">
          <b-form-input
            id="input-1"
            type="text"
            placeholder=""
            required
          ></b-form-input>
        </b-form-group>

        <b-form-select
          class="mb-3"
          v-model="selected"
          :options="options"
        ></b-form-select>

        <b-button class="mx-1" type="submit" variant="success">Pagar</b-button>
        <b-button class="mx-1" @click="onClose" type="close" variant="danger"
          >Cerrar</b-button
        >
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ModalCreate",
  data() {
    return {
      form:{
        email: "",
        repiteEmail:"",
      },
      show: true,
      selected: null,
      options: [
        { value: null, text: "Forma de Pago" },
        { value: "a", text: "Transferencia Bancaria" },
        { value: "b", text: "ServiPag" },
        { value: "c", text: "Contra Entrega" },
        { value: "d", text: "WebPay" },
      ],
    };
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const numeroRandom = Math.floor(Math.random() * 1000000);
      console.log(this.form)
      if(this.form.email !== this.form.repiteEmail){
        this.$swal.fire('Los Emails deben ser iguales')
      }else{
          this.$swal.fire({
          title: "Gracias por comprar:",
          text: `Numero de compra N°:${numeroRandom}`,
          imageUrl:
            "https://cdn-3.expansion.mx/dims4/default/b30c6b8/2147483647/strip/true/crop/1200x800+0+0/resize/1200x800!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ff0%2Fe9%2Fce84731848c681309fc34c9ec7e9%2Fchayanne.jpg",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        this.$refs["my-modal"].hide();
      }
    },
    onClose() {
      this.$refs["my-modal"].hide();
    },
  },
};
</script>

<style></style>
