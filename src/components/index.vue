<template>
    <div class="inde">
        <div class="inde-top">
             <!-- Swiper -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <router-link to="/taking">
                            <span>1</span>
                            <img src="../assets/sho1.png" alt="">
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                         <router-link to="/recruitchannel">                            
                            <span>2</span>
                            <img src="../assets/sho2.png" alt="">\
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/masterlook">                              
                            <span>3</span>
                            <img src="../assets/sho3.png" alt="">
                        </router-link>
                    </div>
                    <div class="swiper-slide">
                        <router-link to="/palmistry">                          
                            <span>4</span>
                            <img src="../assets/sho4.png" alt="">    
                        </router-link>
                    </div>                    
                </div>     
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>  
            </div>
        </div>

        <!-- 面相报告什么的 -->
        <div class="inde-content">
            <router-link to="/facesreport" class="item">
                <div class="title">面相</div>
                <div class="desc">报告</div>
                <img src="../assets/baogao.png">
            </router-link>            
            <router-link to="/ranking" class="item">
                <div class="title">面相</div>                
                <div class="desc">排行</div>
                <img src="../assets/paihang.png">
            </router-link>
            <router-link to="/masterlook" class="item">
                <div class="title">大师</div>
                <div class="desc">看相</div>
                <img src="../assets/dashi.png">
            </router-link>
            <div type="div" class="item item1"  v-clipboard:copy="inputData" @click="fenxiang">
                <div class="title">分享</div>
                <div class="desc">好友/群友</div>
                <img src="../assets/fenxiang.png">
            </div>
        </div>

        <!-- 颜色背景 -->
        <div class="index-yan"></div>

        <div class="index-footer">
            <router-link to="/taking" class="add">
                <span class="iconfont icon-ZSjiahao"></span>                
            </router-link>
            <div class="tjial">添加面相报告</div>
            <router-link to="/setting" class="div-item">
                <img src="../assets/lianxi.png">
                <div>联系我们</div>
            </router-link>
            <div class="div-item"></div>
            <router-link to="/buyreport" class="div-item">
                <img src="../assets/goumai.png">
                <div>购买报告</div>
            </router-link>
        </div>
        <!-- 复制链接弹框  -->
        <div class="fuzi" ref="fxs">
            链接已复制到粘贴板
        </div>

        <div style="position:absolute;top:50%;color:#fff;    z-index: 3;">
            <p v-for="(i,zi) in shu" :key="i">{{zi}}</p>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import { setTimeout } from 'timers';

export default {
    created(){
        var ts=this;
        //发送axios
        // axios.post('/user', {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        // })
        // .then(function (response) {
                setTimeout(()=>{
                    var response={
                        a:[1,2,4,5]
                    }
                    console.log(response);
                    ts.shu=response.a;
                },2000)                
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    },
    mounted(){
        var swiper = new Swiper('.swiper-container', {            
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    },
    data(){
        return{
            inputData:"http://www.qinbaoyx.com/?invitecode=51A71NNMNW",
            shu:[]
        }
    },
    methods:{
        fenxiang(){
            this.$refs.fxs.style="display:block";
            setTimeout(()=>{
                 this.$refs.fxs.style="display:none";
            },2000)
        }
    }   
}
</script>

