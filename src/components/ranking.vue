<template>
  <div class="ranking-continer ranking-box">
      <!-- 背景来的 -->
    <div class="facesr-bei"></div>
    
    <div class="ranking-top"></div>
    <div class="relative">
      <div class="my-top-info">
        <div class="left">
          <div class="image">
            <img             
              src="../assets/mianxto.png"
            >
          </div>
          <div class="user-info">
            <div class="name">AI游客</div>
            <div>面相极好</div>
          </div>
        </div>
        <div class="right">
          <div>好友排名</div>
          <div class="number">1</div>
        </div>
      </div>
      <div class="my-score">
        <div class="my-score-item">
          <div class="title">面相得分</div>
          <div>93分</div>
        </div>
        <div class="my-score-item">
          <div class="title">五行格局</div>
          <div>水火</div>
        </div>
      </div>
      <div class="rank-list">
        <div class="data-none">
          <div>邀请好友来测试,</div>
          <div>就可以看到面相得分排名啦!</div>
          <button type="button" v-clipboard:copy="inputData" @click="fenxiang">
            <span class="icon-share"></span>邀请好友/群友
          </button>
        </div>
        <!---->
      </div>
    </div>
    <!---->
     <!-- 复制链接弹框  -->
        <div class="fuzi" ref="fxs">
            链接已复制到粘贴板
        </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      inputData:"http://www.qinbaoyx.com/?invitecode=51A71NNMNW"
    }
  },
  methods:{
    fenxiang(){
          this.$refs.fxs.style="display:block";
          setTimeout(()=>{
                this.$refs.fxs.style="display:none";
          },2000)
        },
  }

}
</script>

