new Vue({
    el: "#app",
    data: {
        counter: 0,
        title: 'Counter'
    },
    methods: {
        add: function (n, str, event) {
            this.title = str;
            this.counter += n;

            if (n === 5) {
                event.target.style.background = "red"
            } else if (n === 10) {
                event.target.style.color = "green"
            }
        }

    }
});