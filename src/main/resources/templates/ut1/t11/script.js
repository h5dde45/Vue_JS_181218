new Vue({
    el: "#app",
    data: {
        inputValue: 'sdf'
    },
    methods: {
        updateValue: function (event) {
            this.inputValue = event.target.value;
        }
    }
});