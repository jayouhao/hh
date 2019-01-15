<template>
  <div class="myposts-box">
    <!-- 背景来的 -->
    <div class="facesr-bei"></div>
    <div class="myposts-top">
      <img src="../assets/36.svg" alt>
      <div class="rig">
        <p class="one">游客一方儿</p>
        <p class="two">共反馈1次，回答0次</p>
      </div>
    </div>
    <div class="pypos-butt">
      <button type="button" ref="tiwen" @click="tiwen">我的提问</button>
      <button type="button" ref="huidaa" @click="huidaa">我的回答</button>
    </div>
    <div class="myposts-swip">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <span class="dis">你还没有回答过哟...</span>
          </div>
          <div class="swiper-slide">
            <span class="dis">你还没有回答过哟...</span>
          </div>
        </div>
        <!-- Add Pagination -->
        <div ref="tiaoma" hidden class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div ref="hui" hidden class="swiper-button-next"></div>
        <div ref="ti" hidden class="swiper-button-prev"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { setInterval, clearInterval } from 'timers';
export default {
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    this.dis=setInterval(()=>{           
        var disq=this.$refs.tiaoma.children[0].innerText;        
        if(disq==1){
            this.$refs.huidaa.style.borderBottomColor = "#fff";
            this.$refs.tiwen.style.borderBottomColor = "#4d9fff";
        }else{
            this.$refs.huidaa.style.borderBottomColor = "#4d9fff";
            this.$refs.tiwen.style.borderBottomColor = "#fff";
        }
    },100)    
    
  },  
  destroyed(){
      clearInterval(this.dis);
  },
  methods: {
    tiwen(s) {
      this.$refs.huidaa.style.borderBottomColor = "#fff";
      s.target.style.borderBottomColor = "#4d9fff";
      this.$refs.ti.click();
    },
    huidaa(s) {
      this.$refs.tiwen.style.borderBottomColor = "#fff";
      s.target.style.borderBottomColor = "#4d9fff";
      this.$refs.hui.click();
    }
  }
};
</script>
