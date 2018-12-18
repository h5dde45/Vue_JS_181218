new Vue({
    el: "#app",
    data: {
        x: 0,
        y: 0
    },
    methods: {
        handleMouseMove: function (e) {
            this.x = e.clientX
            this.y = e.clientY
            e.target.style.background='green'
        },
        alertValue:function (e) {
            alert(e.target.value)
        }
    }
});