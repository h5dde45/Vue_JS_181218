import Vue from "vue";
import _ from "lodash";

export default new Vue({
  data: {
    products: [
      {
        id: 1,
        title: 'p1',
        price: 11,
        qt: 111
      },
      {
        id: 2,
        title: 'p2',
        price: 22,
        qt: 222
      },
      {
        id: 3,
        title: 'p3',
        price: 33,
        qt: 333
      },
    ]
  },
  methods: {
    viewDetailsList(id){
      let productToView = _.find(this.products, {id: id});
      this.$emit("viewDetails", productToView)
    }
  }
})
