import Vue from 'vue'
import Vuet from 'vuet'
import VueScroll from 'vuet-scroll'
import axios from 'axios'


Vue.use(Vuet)
Vue.use(VueScroll)

export default new Vuet({

        modules: {

            pic: {
                data() {
                    return {
                        list: [],
                        loading: true,
                        done: false,
                        page:0
                    }
                },
                async fetch() {
                    const param = { "seqId":1, "protover":"1.0", "termId":"53102", "userId":"0", "sessionId": 7130336396747932000,
                        "termNo":"76A0F38520987D4BECA0C892176523C1",
                        "termClass":1, "termType":1, "cliver":"0.0.2", data:{
                            "page" : this.page,
                            "size" : 28,
                            "channelId" : 33
                        }
                    }
                    this.loading = true
                    axios.post('http://172.16.100.217:8280/app/getPictureList',param)
                        .then(res=>{
                        console.log(1111)
                        this.list = [...this.list, ...res.data.data.pictureList]
    // this.list = res.data.data.pictureList
                        this.page++
                        this.loading = false
                        this.done = res.data.data.pictureList.length < 20
                    }).catch(error => console.log(error))
                },

            }
        }


})