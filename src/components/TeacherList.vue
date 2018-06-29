<template>
    <div>

        <section class="teacher-list" v-vuet-scroll="{ path: 'pic', name:'pic-content' }">
            <ul>
                <li class="clearfix on"  v-for="item in list.list" >
                    <router-link :to="{ name: 'detail', params: { id: item.id }}">
                    <div class="icon fl"><img :src="((item.info ? list.api + item.info : defaultImg))" :onerror="img" width="100%"></div>
                    <div class="words fl">
                        <h2>{{item.name}}</h2>
                        <div class="content">
                            <p id="test">{{item.introduction}}</p>
                            <!--<p id="test">{{item.description}}}</p>-->
                            <!--<span onclick="contentHide()">收起</span>-->
                        </div>
                    </div>
                    <!--<div class="mask" v-show="false"></div>-->
                    </router-link>
                </li>
            </ul>
            <v-loading :done="list.done" :loading="list.loading" @seeing="list.fetch()"></v-loading>
        </section>

    </div>
</template>

<script>
    import { mapModules, mapRules } from 'vuet'
    import t from '../assets/img/head.png'
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
        },
        name: "teacher-list",
        data() {
            return{
                img: 'this.src="' + t + '"',
                defaultImg: t
            }
        }
    }
</script>

<style scoped>
    .teacher-list{
        overflow-y: auto;
        position: absolute;
        top:1.8rem;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>