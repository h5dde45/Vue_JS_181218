new Vue({
    el: "#app",
    data: {
        name: "asd2",
        number: 100,
        isOk: false,
        string: "123"
    },
    methods: {
        changeName: function (event) {
            this.name = event.target.value;
        },
        sayHello: function () {
            return "qwe";
        }
    }
});