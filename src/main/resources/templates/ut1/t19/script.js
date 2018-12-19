var vue1 = new Vue({
    el: '#app',
    data: {
        title: "asd 1"
    },
    methods: {}
});

var vue2 = new Vue({
    el: '#app2',
    data: {
       title:"asd 2"
    },
    methods: {
        updateFirstTitle:function () {
            vue1.title='from second'
        }
    }
});