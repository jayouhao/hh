<template>
  <div class="face-box">
    <!-- 背景来的 -->
    <div class="facesr-bei"></div>

    <div class="page-title">面相报告</div>
    <div class="face-miam">        
    <router-link        
        v-for="(il,i) in arr"        
        :to="il.tiao"
        class="item"
        :key="i" 
        v-if="il.mia=='我的面相报告'||il.mia=='我的流年运势'"                
      >
        <span class="iconfont icon-fanhui1"></span>
        <div class="item-left">{{il.mia}}</div>
        <div class="item-right">{{il.zl}}</div>
      </router-link>
        <router-link :to="il.tiao" class="item" v-else-if="il.mia=='事业运详解'||il.mia=='情感详解'">
        <span class="iconfont icon-fanhui2"></span>
        <div class="item-left">{{il.mia}}</div>
        <div class="item-right">
          {{il.zl}}
          <span class="circle-dot"></span>
        </div>
      </router-link>
      <router-link :to="il.tiao" class="item itemh" v-else>          
        <span class="iconfont"></span>
        <div class="item-left">{{il.mia}}</div>
        <div class="item-right">
          <span class="homem">{{il.zl}}</span>份
        </div>
      </router-link>
    </div>

    <div class="face-footer">
      <router-link to="/masterlook" class="person">面相大师真人看相</router-link>
      <router-link to="/taking" class="person add">添加新的面相报告</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { mia: "我的面相报告", tiao: "/jiesuo", zl: "" },
        { mia: "我的流年运势", tiao: "/myreport", zl: "" },
        { mia: "事业运详解", tiao: "/invitecode?shi", zl: "2343人获取" },
        { mia: "情感详解", tiao: "/invitecode?gan", zl: "2343人获取" },
        { mia: "我添加的报告", tiao: "/wodebao", zl: "1" }
      ]
    };
  }
};
</script>

