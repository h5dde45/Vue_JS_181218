<template>
    <v-card>
        <div class="pa-2">
            <div class="display-1">
                {{part.bookTitle}}
            </div>
            <div class="headline">
                {{part.partTitle}}
            </div>
            <v-divider class="black"></v-divider>
            <div class="text-xs-center my-3 success">
                <youtube :video-id="part.youtube_id" :player-width="playerWidth"></youtube>
            </div>
        </div>
    </v-card>
</template>
<script>
    export default {
        props: {
            "part": {
                type: Object,
                required: true
            }
        },
        computed: {
            playerWidth(){
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return '220px'
                    case 'sm':
                        return '400px'
                    case 'md':
                        return '500px'
                    case 'lg':
                        return '600px'
                    case 'xl':
                        return '800px'
                }
            }
        }
    }
</script>
<style scoped>

</style>