<template>
    <div >
        <div id="pic" v-vuet-scroll="{ path: 'pic', name:'pic-content' }">
            <ul class="clearfix">
                <li class="li" v-for="item in list.list">
                    <div class="box" @click="showPicture(item)">
                        <div class="img"><img :src="item.iconfid"/></div>
                        <div class="box-hover"><span>{{item.description}}</span></div>
                    </div>
                </li>
            </ul>
            <v-loading :done="list.done" :loading="list.loading" @seeing="list.fetch()"></v-loading>
        </div>

    </div>
</template>

<script>
    import { mapModules, mapRules } from 'vuet'
    import loading from './loading.vue'

    export default {
        mixins: [
            mapModules({
                list: 'pic' // { 别名： '模块路径' }
            }),
            mapRules({
                once: [{ path: 'pic' }]
            })
        ],
        components: {
            'v-loading': loading
        }
    }

</script>

<style scoped>
    #pic{
        height: 600px;
        overflow: auto;
    }
</style>