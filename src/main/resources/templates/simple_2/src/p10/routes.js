import ProductList from './ProductList.vue'
import ProductDetails from './ProductDetails.vue'
import ProductAdd from './ProductAdd.vue'

export const  routes=[
  {
    path:'/',
    component:ProductList
  },
  {
    path:'/add',
    component:ProductAdd
  },
  {
    path:'/detail/:id',
    component:ProductDetails
  },
  {
    path:'*',
    component:ProductList
  }
]
