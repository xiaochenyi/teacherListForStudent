<template>
    <div class="loading-box">
        <div :class="!done ? 'loading-start': 'msg'">
            {{done ? '没有更多。。。' : ''}}
        </div>
    </div>
</template>

<script>
    import utils from '../utils.js'

    export default {
        props: {
            done: {
                type:Boolean,
                default: false
            },
            loading: {
                type:Boolean,
                default: false
            }
        },
        mounted () {
            this.timer = setInterval(() => {
                if(utils.isSeeing(this.$el) && !this.loading && !this.done) {
                    this.$emit('seeing')
                }
            }, 300)
        },
        beforeDestroy() {
            clearInterval(this.timer)
        }
    }
</script>

<style scoped>
    .loading-box .msg{
        line-height: 70px;
        text-align: center;
        font-size: 14px;
    }
    .loading-box .loading-start {
        margin: 20px auto 20px auto;
        position: relative;
        animation: rotate-forever 1s infinite linear;
        height: 30px;
        width: 30px;
        border: 4px solid #00000e;
        border-right-color: transparent;
        border-radius: 50%;
    }
    .loading-box .loading-start .msg {
        display: none;
    }

    @keyframes rotate-forever {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
</style>