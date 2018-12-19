new Vue({
    el: '#app',
    data: {
        counter: 0,
        counter2: 0,
        condition: '<3'
    },
    methods: {
        add: function () {
            this.counter++;
        },
        sub: function () {
            this.counter--;
        }
    },
    computed: {
        compResult: function () {
           return this.counter > 3 ? '>3' : '<3'
        }
    },
    watch:{
        counter:function (v) {
            alert(v)
        }
    }
})