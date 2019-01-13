<template>
    <div>
        <v-card class="pa-2">
            <div>
                <div class="display-1">{{part.bookTitle}}</div>
                <div class="headline">{{part.partTile}}</div>
                <v-divider class="black"></v-divider>
            </div>
            <div class="text-xs-center mt-2 mb-2 success">
                <youtube :video-id="part.youtube_id"
                         :player-width="playerWidth"></youtube>
            </div>
            <div class="mt-2">
                <v-slider v-model="fontSize" :label="`Размер шрифта (${fontSize})`"
                step="1" min="10" max="30" tick-size="5"></v-slider>
                <v-tabs v-model=tabMode color="accent"
                        dark fixed-tabs slider-color="success">
                    <v-tab :key="'german'" ripple>
                        Текст с подсказками
                    </v-tab>
                    <v-tab :key="'sidebyside'" ripple>
                        Параллельно
                    </v-tab>
                    <v-tab-item :key="'german'">
                        <div v-for="(paragraf,i) in part.content"
                             :key="`par1${i}`">
                            <span>&nbsp;&nbsp;</span>
                            <span v-for="(sentence,y) in paragraf.sentences"
                                  :key="`par1${i}sen1${y}`" :style="textStyle">
                            <span>
                                {{sentence.origText}}
                                <v-icon size="fontSize" @click.prevent="toggleVisibility(i,y)">help</v-icon>
                                <span v-if="getVisibilityFlag(i,y).value" class="success--text"
                                      style="font-weight: bold">
                                         {{sentence.transText}}
                                </span>
                            </span>
                        </span>
                        </div>
                    </v-tab-item>
                    <v-tab-item :key="'sidebyside'">
                        <v-container>
                            <v-layout raw wrap v-for="(paragraf,i) in part.content"
                                      :key="`par2${i}`">
                                <v-flex xs6>
                                    <span>&nbsp;&nbsp;</span>
                                    <span v-for="(sentence,y) in paragraf.sentences"
                                          :key="`par2${i}sen2${y}_orig`" :style="textStyle">
                                        <span>{{sentence.origText}}</span>
                                    </span>
                                </v-flex>
                                <v-flex xs6>
                                    <span>&nbsp;&nbsp;</span>
                                    <span v-for="(sentence,y) in paragraf.sentences"
                                          :key="`par2${i}sen2${y}_trans`" :style="textStyle">
                                        <span>{{sentence.transText}}</span>
                                    </span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-tab-item>
                </v-tabs>
            </div>
        </v-card>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                tabMode: 'german',
                visibilityKeys: [],
                fontSize: 18
            }
        },
        props: {
            'part': {
                type: Object,
                required: true
            }
        },
        computed: {
            playerWidth(){
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs' :
                        return '220px'
                    case 'sm' :
                        return '400px'
                    case 'md' :
                        return '500px'
                    case 'lg' :
                        return '600px'
                    case 'xl' :
                        return '800px'
                }
            },
            textStyle(){
                return {
                    fontSize: `${this.fontSize}px`
                }
            }
        },
        created(){
            for (let i = 0; i < this.part.content.length; i++) {
                for (let y = 0; y < this.part.content[i].sentences.length; y++) {
                    this.visibilityKeys.push({
                        key: `${i}${y}`,
                        value: false
                    })
                }
            }
        },
        methods: {
            getVisibilityFlag(i, y){
                return this.visibilityKeys.find(k => k.key == `${i}${y}`)
            },
            toggleVisibility(i, y){
                var flag = this.getVisibilityFlag(i, y);
                flag.value = !flag.value
            }
        }
    }
</script>