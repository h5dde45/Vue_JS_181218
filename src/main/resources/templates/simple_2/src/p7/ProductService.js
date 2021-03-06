import Vue from "vue";
import _ from 'lodash'

export default new Vue({
  data: {
    products: [{
      id: 1,
      title: 't1',
      price: 11,
      qt: 111
    },
      {
        id: 2,
        title: 't2',
        price: 22,
        qt: 222
      },
      {
        id: 3,
        title: 't3',
        price: 33,
        qt: 333
      }
    ]
  },
  methods:{
    viewDetails(id){
      let productToView = _.find(this.products, {id: id})
      this.$emit("viewDetails", productToView)
    }
  }
})
