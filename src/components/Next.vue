<template>
    <section class="tabl">
        <div class="prompt">
            <p class="note"><span>友情提示：</span>学员您好，本导师选择系统为康得新"TOP100"后备梯队培养项目专业设计，为保证您的学习质量和效果：</p>
            <p>1、请根据导师情况慎重选择；</p>
            <p>2、集团人力资源中心建议您就近跨事业群、跨部门选择导师；</p>
            <p>3、每位学员只能选择一名导师；</p>
            <p>4、每位导师限带3名学员。</p>
        </div>

        <dl>
            <dd class="clearfix"><label>姓名：</label><input type="text" name="name" id="name" v-model="data.name"></dd>
            <dd class="clearfix"><label>公司：</label><input type="text" name="station" id="station" v-model="data.station"></dd>
            <dd class="clearfix"><label>事业群：</label><input type="text" name="department" id="department" v-model="data.department"></dd>
            <dd class="clearfix"><label>手机号：</label><input type="text" name="tel" id="tel" v-model="data.tel"></dd>
            <dd class="clearfix"><label>邮箱：</label><input type="text" name="email" id="email" v-model="data.email"></dd>
        </dl>
        <div class="opera">
            <input class="reset" type="reset" @click="data.rst" value="重置">
            <input class="submit" type="submit" @click="data.sub" value="提交">
        </div>

        <div class="tabl-mask" v-if="data.mask">
            <span>恭喜！您已成功选择该导师！</span>
        </div>
    </section>

</template>


<script>
    import { mapModules, mapRules } from 'vuet'

    export default {
        mixins: [
            mapModules({
                data: 'submitInfo' // { 别名： '模块路径' }
            }),
            mapRules({
                need: [{ path: 'submitInfo' }]
            })
        ],
    }
</script>