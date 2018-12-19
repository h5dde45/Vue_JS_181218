var vue = new Vue({
    data: {
        title: "asd 1"
    },
    methods: {
        updateFirstTitle: function () {
            this.title = 'asd 2'
            this.$refs.heading2.style.color = "red"
            this.$refs.horline.style.marginTop = "30px"
        }
    },
    template: `<div><h1>=> {{title}}</h1>
<i>asd</i>
</div>`
});

vue.$mount('#app')