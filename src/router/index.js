import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeViews.vue"),
  },
  {
    path:"/carrito",
    name:"carrito",
    component:() => import("../components/CarritoCompra.vue")
  },
  {
    path: "/producto/electronics",
    name: "electronics",
    component: () => import("../components/ListaProductos/ItemsElectronic.vue"),
  },
  {
    path: "/producto/men's-clothing",
    name: "men",
    component: () => import("../components/ListaProductos/RopaHombre.vue"),
  },
  {
    path: "/producto/women's-clothing",
    name: "woman",
    component: () => import("../components/ListaProductos/RopaMujer.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
