<template>
  <div class="home">    
    <Jiazai a='1'></Jiazai>
    <!-- 弹出协议 -->
    <div class="home-tan" @click="yin" ref="tanxie">
      <div class="neiru">
        <p class="one">Al面相大师说明</p>
        <p class="two">
          面部独论，<span style="color:#FF7700">AI面相大师</span>由<span style="color:#FF7700">3位</span>国内资深相学大师整理的面相学基本概念，和<span style="color:#FF7700">5位</span>人工智能工程师运用深度神经网络学习语言让AI学习近<span style="color:#FF7700">20万</span>拥有<span style="color:#FF7700">105个</span>定位点的真实人脸样本数据，AI测算最精准的数据，匹配面相学大师<span style="color:#FF7700">倾囊相授</span>的相学经验，我们尽最大可能真实还原《面相学》这一中国传统文化的精髓，希望可以展示其中的规律之美。
        </p>
        <div class="read">
          <div class="agree">我已阅读并同意</div>
          <div class="agreement">用户隐私协议</div>
          <img src="../assets/gou.png" class="agreeicon"/>
        </div>
       <button type="button" class="next" @click="nextcli">下一步</button>
      </div>
    </div>

    <div class="home-top">
      <img class="biao" src="../assets/biaoti.png" alt="">
      <img class="xuanzi" src="../assets/xuanzi.png" alt="">
    </div>

    <div class="home-mianbao">
        <div class="left">
          <p class="a1">面相报告</p>
          <p class="a2">已生成1439324份</p>
        </div>
        <div class="swiper-container right">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <span class="name">名字的的</span>
              <span class="laa">已获取面相报告</span>
              <img src="../assets/15438175506083.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <span class="name">名字的</span>
              <span class="laa">已获取面相报告</span>
              <img src="../assets/15438175506083.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <span class="name">名字的的的</span>
              <span class="laa">已获取面相报告</span>
              <img src="../assets/15438175506083.jpg" alt="">
            </div>
            <div class="swiper-slide">
              <span class="name">sdfsdfsdfsdfse</span>
              <span class="laa">已获取面相报告</span>
              <img src="../assets/15438175506083.jpg" alt="">
            </div>
          </div>
          <!-- Add Pagination -->
          <!-- <div class="swiper-pagination"></div> -->
        </div>
    </div>


    <div class="home-introduce">
      <div class="introducetitle">人工智能看面相</div>
      <div class="content">相由心生，境随心转。面相学通过观察面部特征来解码人生命运，AI面相大师小程序则利用人工智能深度神经网络学习技术与人脸识别定位技术将这一中国传统文化重新呈现。</div>
      <div class="technologys">
        <div class="technology">
          <img src="../assets/xu1.png" class="technologyicon">
          <div class="technologyname">面相学</div>
        </div>
        <div class="technology">
          <img src="../assets/xu2.png" class="technologyicon">
          <div class="technologyname">人工智能</div>
        </div>
        <div class="technology">
          <img src="../assets/xu3.png" class="technologyicon">
          <div class="technologyname">人脸定位</div>
          </div>
      </div>
      <button type="button" class="getreport" @click="mian">获取面相报告</button>
    </div>
    <div class="home-bei"></div>

    <div ref="litiao" style="display:none;">
      <router-link to='/index' style="position: absolute;
            top: 33%;
            right: 10%;
            color: #fff;      
            z-index: 10;">
              临时跳转到首页
          </router-link>
    </div>
    
  </div>
</template>
<script>
import Jiazai from './jiazai';
import Swiper from 'swiper';
import { setTimeout } from 'timers';
export default {  
  mounted(){
     var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      direction: 'vertical',
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });

    setTimeout(()=>{
      $(".ho-jiazai").css({display:"none"});      
      this.$refs.litiao.style.display="block";
    },1000);
         
  },

  data () {
    return {
      
    }
  },
  methods:{
    yin(s){      
      s.target.className=="home-tan"?
      s.target.style.display="none":'';
    },
    mian(){
      this.$refs.tanxie.style.display="block";
    },
    nextcli(){
      this.$router.push('/taking')
    }
  },
  components:{
    Jiazai
  }
}
</script>

