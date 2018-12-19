new Vue({
    el: "#app",
    data: {
        isActive: false,
        color: 'blue'
    },
    computed: {
        getCssClass: function () {
           return {
               'red': this.isActive,
               'green': !this.isActive
           }
        }
    }
});