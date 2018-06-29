<template>
    <div class="teracher-detail">
        <div class="base-info">
            <img :src="((user.user.info ? user.api + user.user.info : defaultImg))" :onerror="img" class="head">
            <p>{{user.user.name}}的基本信息</p>
            <ul class="clearfix">
                <li>事业群：{{user.user.department || "暂无"}}</li>
                <li>公司：{{user.user.company || "暂无"}}</li>
                <li>手机号：{{user.user.phone || "暂无"}}</li>
                <li>邮箱：{{user.user.email || "暂无"}}</li>
            </ul>
        </div>
        <div class="description">
            <h3>导师简介</h3>
            <p>{{user.user.introduction}}</p>
        </div>
        <div class="status">
            <h3>选择状态：
                <span v-if="user.user.unit_count == 0 || (user.user.unit_count - user.user.voted_count) > 0" class="red">可选</span>
                <span v-else class="red">不可选</span>
            </h3>
            <p>限选人数：{{user.user.unit_count == 0 ? "不限": user.user.unit_count}}</p>
            <p>已选人数：{{user.user.voted_count}}</p>
            <p>可选人数：{{user.user.unit_count == 0 ? "不限" : user.user.unit_count - user.user.voted_count}}</p>
        </div>

        <router-link v-if="user.user.unit_count == 0 || (user.user.unit_count - user.user.voted_count) > 0"  :to="{ name: 'next', params: { id: $route.params.id }}">
            <div class="btn">选择该导师</div>
        </router-link>
        <div v-else class="btn gray">选择该导师</div>
    </div>
</template>

<script>
    import { mapModules, mapRules } from 'vuet'
    import t from '../assets/img/head.png'
    export default {
        mixins: [
            mapModules({
                user: 'detail' // { 别名： '模块路径' }
            }),
            mapRules({
                need: [{ path: 'detail'}]
            })
        ],
        name: "teacher-detail",
        data() {
            return{
                img: 'this.src="' + t + '"',
                defaultImg: t
            }
        }
    }
</script>

<style scoped>
    .teracher-detail{
        font-size: 0.64rem;
    }
    .base-info{
        border-bottom:1px solid #DFDFDF;
        line-height: 2.2;
        padding-bottom: 0.3rem;
    }
    .base-info p{
        text-align: center;
        font-size: 0.7rem;
        color: #333333;
    }
    .base-info .head{
        display: block;
        width: 3.1rem;
        border-radius: 100%;
        margin: 0.7rem auto 0.3rem auto;
    }
    .base-info ul{
        padding: 0 0.52rem;
    }
    .base-info ul li{
        width: 50%;
        float:left;
        color: #454648;
    }
    .description{
        padding: 0.8rem 0.5rem;
        border-bottom:1px solid #DFDFDF;
    }
    .description h3{
        font-size: 0.68rem;
        font-weight: 600;
        padding-bottom: 0.4rem;
        color: #333333;
    }
    .description p{
        color: #9F9F9F;
        line-height: 1.7;
    }
    .status{
        padding: 0.8rem 0.5rem;
    }
    .status h3{
        font-size: 0.68rem;
        font-weight: 600;
        padding-bottom: 0.4rem;
        color: #333333;
    }
    .status p{
        padding-left: 1.5rem;
        color: #9F9F9F;
        line-height:2;
    }
    .btn{
        width: 42.6%;
        height: 1.5rem;
        line-height: 1.5rem;
        margin: 1rem auto 0 auto;
        background: #EB4346;
        box-shadow: 0 2px 4px 0 #C2C2C2;
        text-align: center;
        color: #FFFFFF;
        -webkit-border-radius: 3rem;
        -moz-border-radius: 3rem;
        border-radius: 3rem;
    }
    .gray{
        background: #C2C2C2;
    }
</style>