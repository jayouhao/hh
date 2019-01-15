<template>
  <div class="setting-box">
    <!-- 背景来的 -->
    <div class="facesr-bei"></div>

    <div class="sett-continer">
      <div class="page-title">联系我们</div>
      <div class="list-box">
        <router-link to="/mastersettled" class="item">
          <span class="iconfont icon-fanhui1"></span>
          <div class="icon icon-dashiruzhu"></div>
          <div class="span">大师入驻</div>
        </router-link>
        <router-link to="/recruitchannel" class="item">
          <span class="iconfont icon-fanhui2"></span>
          <div class="icon icon-tuiguangqudao"></div>
          <div class="span">推广渠道招募</div>
        </router-link>
        <router-link to="/product" class="item">
          <span class="iconfont icon-fanhui3"></span>
          <div class="icon icon-wentifanhui"></div>
          <div class="span">问题反馈</div>
        </router-link>
        <router-link to="/lianxi" class="item">
          <span class="iconfont icon-fanhui4"></span>
          <div class="icon icon-lianxiwomen"></div>
          <div class="span">联系我们</div>
        </router-link>
      </div>
      <div class="official-accounts">
        <div class="official-item">
          <div class="image">
            <img src="../assets/ai.png">
          </div>
          <div class="span">
            <div class="title">"AI面相大师"微信公众号</div>
            <view>知晓爱情、事业、健康更多运势</view>
          </div>
          <button type="button" @click="guanblo">关注</button>
        </div>
        <div class="official-item">
          <div class="image">
            <img src="../assets/ai1.png">
          </div>
          <div class="span">
            <div class="title">添加欧阳老师个人微信</div>
            <view>看相丨算卦丨合婚丨前程丨改名</view>
          </div>
          <button type="button" @click="jiawei">加微信</button>
        </div>
      </div>
      <!---->
    </div>

    <!-- 关注的图片 -->
    <div class="settt-layer" @click="guango" ref="dahe">
      <div class="attention">
        <div class="image">
          <img src="../assets/ai.png" ref="gu">
          <img src="../assets/ai1.png" ref="ge" style="display:none" alt="">
        </div>
        <div class="span">{{zhi}}</div>
        <img class="dami" src="../assets/guanzu.png" ref="gu1">
        <img class="dami" src="../assets/you.png" ref="ge1" style="display:none" alt="">
      </div>
    </div>

    <!-- 加微信的图片 -->
  </div>
</template>

<script>
export default {
    data(){
        return{
            zhi:'"AI面相大师"微信公众号'
        }
    },
    methods:{
        guanblo(){
            this.zhi='"AI面相大师"微信公众号';
            this.$refs.gu.style.display="block";
            this.$refs.gu1.style.display="block";
            this.$refs.ge.style.display="none";
            this.$refs.ge1.style.display="none";
            this.$refs.dahe.style.display="block";
        },
        guango(){
            this.$refs.dahe.style.display="none";
        },
        jiawei(){
            this.zhi='添加欧阳老师个人微信';
            this.$refs.gu.style.display="none";
            this.$refs.gu1.style.display="none";
            this.$refs.ge.style.display="block";
            this.$refs.ge1.style.display="block";
            this.$refs.dahe.style.display="block";
        }
    }
}
</script>
