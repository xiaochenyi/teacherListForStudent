import Vue from 'vue'
import Vuet from 'vuet'
import VueScroll from 'vuet-scroll'
import axios from 'axios'
import utils from '../utils'

// let api = "http://172.16.120.163:3000/"  // 本地api
let api = "http://47.93.6.90:3000/" // 线上api


var pid = utils.getQueryString('pid');

Vue
    .use(Vuet)
    .use(VueScroll)



export default new Vuet({
    modules: {
        top: {
            data() {
                return {
                    title: "在线系统"
                }
            },
            async fetch() {
                var param = {
                    pid:pid,
                };
                axios.post(api + 'projects/queryNameByPid', param)
                    .then(res=>{
                        this.title = res.data.data.project.name
                    }).catch(error => console.log(error))
            }
        },
        pic: {
            data() {
                return {
                    list: [],
                    loading: true,
                    done: false,
                    currentPage:1,
                    api: api
                }
            },
            async fetch() {
                var param = {
                    pid:pid,
                    currentPage: this.currentPage,
                    pageCount: 10
                };
                this.loading = true
                axios.post(api + 'teachers/queryUsers', param)
                    .then(res=>{
                        // console.log(1111,res);

                        this.list = [...this.list, ...res.data.list]
                        this.currentPage++
                        this.loading = false
                        this.done = res.data.list.length < 10
                    }).catch(error => console.log(error))
            },
        },
        detail: {
            data() {
                return{
                    api:api,
                    user: {}
                }
            },
            async fetch() {
                var param = {
                    tid: `${this.app.$route.params.id}`,
                    pid: pid
                }
                axios.post(api + 'teachers/queryTeacherByPid', param)
                    .then(res=>{
                        // console.log(22222,res.data.data.user);

                        this.user = res.data.data.user;

                    }).catch(error => console.log(error))
            },
        },
        submitInfo: {
            data() {
                return{
                    name:"",
                    department:"",
                    station:"",
                    tel:"",
                    email:"",
                    mask:false
                }
            },
            async fetch() {
                this.mask = false;
                this.tid = `${this.app.$route.params.id}`
            },
            rst(e) {
                e.preventDefault();
                this.name = ""
                this.department=""
                this.station=""
                this.tel=""
                this.email=""
            },
            sub(e) {
                e.preventDefault();
                if(!utils.checkName(this.name)) {
                    utils.toast("姓名格式有问题");
                    return false;
                }
                if(!utils.checkEmpty(this.department)) {
                    utils.toast("请填写部门");
                    return false;
                }
                if(!utils.checkEmpty(this.station)) {
                    utils.toast("请填写岗位");
                    return false;
                }
                if(!utils.checkTel(this.tel)) {
                    utils.toast("请检查你的手机号有误");
                    return false;
                }
                if(!utils.checkEmail(this.email)) {
                    utils.toast("请检查你的邮箱有误");
                    return false;
                }

                var param = {
                    tid: this.tid,
                    pid: pid,
                    name:this.name,
                    department:this.department,
                    company:this.station,
                    phone:this.tel,
                    email:this.email,
                }

                axios.post(api + 'students/commit', param)
                    .then(res=>{
                        if(res.data.code == "0") {
                            utils.toast(res.data.msg);
                        } else {
                            // utils.toast(res.data.msg);
                            // setTimeout(function () {
                            //     // window.location.href = "/"
                            //     window.opener = null;
                            //     window.close();
                            //     wx.closeWindow();
                            // }, 200);
                            this.mask = true;
                            this.rst(e);
                        }

                    }).catch(error => console.log(error))
            }
        }
    }
})