import ProductList from "./ProductList.vue";
import ProductDetails from "./ProductDetails.vue";
import ProductAdd from "./ProductAdd.vue";

export const routes = [
  {
    path: '/',
    component: ProductList,
    name: 'home'
  },
  {
    path: '/add',
    component: ProductAdd
  },
  {
    path: '/detail/:id',
    component: ProductDetails,
    name: 'product-details',
    props: {staticText:'asd'}
  },
  {
    path: '*',
    component: ProductList
  }
]
