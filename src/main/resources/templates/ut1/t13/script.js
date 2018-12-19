new Vue({
    el: "#app",
    data: {
        color: 'blue',
        height: '100px'
    },
    computed: {
        circleClasses: function () {
            return {
                'background': this.color,
                'height': this.height + 'px'
            }
        }
    }
});