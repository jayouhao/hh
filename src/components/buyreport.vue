<template>
  <div class="buyreport-box">
    <!-- 背景来的 -->
    <div class="facesr-bei"></div>

    <div class="buyreport-top">
      <div class="buyreport-top-title">购买报告</div>
      <div class="tabs">
        <div class="item32l">
          <div class="item-tab active">我的报告</div>
        </div>
      </div>
    </div>
    <div class="tabs-content">
      <div class="first">
        <img src="../assets/guomai1.png">
        <div class="liu32l">流年运势</div>
        <div class="desc">早-中-晚年详述</div>
        <router-link to="/myreport" class="lsdl3">点击查看</router-link>
      </div>
      <div class="first">
        <img src="../assets/goumai2.png">
        <div class="liu32l">鼻相解读</div>
        <div class="desc">鼻子相学解释</div>
        <router-link to="/jiesuo" class="lsdl3">
          <span class="iconfont icon-suo"></span> 2元解锁
        </router-link>
      </div>
    </div>
    <div class="continer">
      <router-link to="/invitecode?shi" class="unlock-cause">
        <div class="unlock-save-title">我的面相事业运程报告</div>
        <div class="unlock-save-desc">面相上你的事业运程和财运怎么？是否适合创业？应该选择哪一类工作？</div>
        <div class="unlock-causeicon">
          <span class="iconfont icon-suo"></span>
        </div>
        <div class="button">解锁报告</div>
      </router-link>
      <router-link to="/invitecode?gan" class="unlock-cause unlock-cause1">
        <div class="unlock-save-title">我的面相情感运程报告</div>
        <div
          data-v-7a882ca8
          class="unlock-save-desc"
        >眉眼、嘴巴都隐藏着一个人的爱情密码。何时能遇上正缘？与TA能不能相伴永久？面相可以告诉你...</div>
        <div class="unlock-causeicon unlock-causeicon1">
          <span class="iconfont icon-suo"></span>
        </div>
        <div class="button button1">解锁报告</div>
      </router-link>
    </div>
  </div>
</template>
