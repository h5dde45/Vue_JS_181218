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
            <div class="mt-2">
                <v-slider v-model="fontSize" :label="`Размер шрифта: (${fontSize})`"
                          :step="1" max="22" min="12" tick-size="5">
                </v-slider>
                <v-tabs v-model="tabMode" color="orange" dark fixed-tabs
                        slider-color="blue">
                    <v-tab :key="'english'" ripple>
                        Текст с подсказками
                    </v-tab>
                    <v-tab :key="'sidebyside'" ripple>
                        Параллельно
                    </v-tab>
                    <v-tab-item :key="'english'">
                        <div v-for="(paragraph,i) in part.content" :key="`par1${i}`">
                            <span>&nbsp;&nbsp;</span>
                            <span v-for="(sentence,j) in paragraph.sentences"
                                  :key="`par1${i}sen1${j}`" :style="textStyle">
                                <span>{{sentence.origText}}</span>
                                <v-icon size="fontSize" class="green--text"
                                        @click="toggleVisibility(i,j)">help</v-icon>
                                <span class="green--text" v-if="getVisibilityFlag(i,j).value"
                                      style="font-weight: 500">{{sentence.transText}}</span>
                            </span>
                        </div>
                    </v-tab-item>
                    <v-tab-item :key="'sidebyside'">
                        <v-container>
                            <v-layout row wrap v-for="(paragraph,i) in part.content"
                                      :key="`par2${i}`">
                                <v-flex xs6>
                                    <span>&nbsp;&nbsp;</span>
                                    <span v-for="(sentence,j) in paragraph.sentences"
                                          :key="`par2${i}sen2${j}_org`" :style="textStyle">
                                        <span>{{sentence.origText}}</span>
                                    </span>
                                </v-flex>
                                <v-flex xs6>
                                    <span>&nbsp;&nbsp;</span>
                                    <span v-for="(sentence,j) in paragraph.sentences"
                                          :key="`par2${i}sen2${j}_trn`" :style="textStyle">
                                        <span class="green--text"
                                              style="font-weight: 500">
                                            {{sentence.transText}}</span>
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-tab-item>
                </v-tabs>
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
        data(){
            return {
                tabMode: 'english',
                visibilityKeys: [],
                fontSize: 18
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
            },
            textStyle(){
                return {
                    fontSize: `${this.fontSize}px`
                }
            }
        }
        ,
        methods: {
            getVisibilityFlag(i, j)
            {
                return this.visibilityKeys.find(k => k.key == `${i}${j}`)
            }
            ,
            toggleVisibility(i, j)
            {
                let flag = this.getVisibilityFlag(i, j)
                flag.value = !flag.value
            }
        }
        ,
        created()
        {
            for (let i = 0; i < this.part.content.length; i++) {
                for (let j = 0; j < this.part.content[i].sentences.length; j++) {
                    this.visibilityKeys.push({
                        key: `${i}${j}`,
                        value: false
                    })
                }
            }
        }
    }
</script>
<style scoped>

</style>