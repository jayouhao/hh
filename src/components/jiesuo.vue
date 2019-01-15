<template>
  <div class="jiesuo-box">
    <!-- 背景来的 -->
    <div class="facesr-bei"></div>

    <div class="myreport-top">
      <div class="name-report">
        <span>sdfs</span>的面相报告
      </div>
      <div class="can-header">
        <div id="head-img" class="image">
          <img class="imgto" src="../assets/jiesuoto.png">
        </div>
        <canvas width="375" height="240"></canvas>
      </div>
    </div>

    <div class="summary">
      <div class="top-title">面相概述</div>
      <div
        class="top-desc"
      >额头光滑平整，广阔圆润，为人较为聪明，记性很好，早年运势较好。中庭较高，鼻颧相配，说明中年运势良好，能得亲子、兄弟助力。地阁宽厚有朝，腮颐丰隆饱满，晚年家庭和美，有名誉和地位，能受人尊重。</div>
    </div>

    <div class="scores">
      <div class="scores-title">五官评分</div>
      <div class="jiesuo-hua">
        <canvas id="a_canvas1"></canvas>
        <canvas id="a_canvas"></canvas>
      </div>      
      <div class="grade">
        <div class="grade-left">
          面相评分:
          <span class="curr">93</span>
          <span class="max">总分100分</span>
        </div>
        <div class="grade-right">面相极好</div>
      </div>
      <div class="load">
        <div style="width: 93%;"></div>
      </div>
    </div>

    <div class="savephto">
      <img src="../assets/baguazhen.png">
    </div>

    <div class="organs-box">
      <div class="organs-title">眼睛（监察官）</div>
      <div class="right-fbox">智谋双全</div>
      <div class="content">
        <img src="../assets/zyou.png">眼睛细长型的通常有智慧谋虑深。眼睛细长且秀气，是福贵之相。眼睛较长的人办事常常会做到稳、准、狠。他们的责任心一般都很强，办事严肃认真。这种人有很强的决断能力，有远见，因此常常能成就大事。有的人眼睛长得又长又大，给人一种慈善温和的印象。这种人很有人情味，并富有同情心，具有牺牲和奉献精神，他们事业的成功或许与这种奉献精神和同情心有关。这类人在年轻的时候会赢得别人的信任和帮助，成为身边人最可信赖的朋友和辅助事业的好伙伴，年老的时候会成为被众人尊敬的慈善家。
        <!---->
      </div>
      <!---->
    </div>
    <!--未解锁前鼻子显示不完全 -->
    <div class="organs-box organs-box1">
      <div class="organs-title">鼻子（审辨官）</div>
      <div class="right-fbox">发达顺遂</div>
      <div class="content1">
        <img src="../assets/bizi.png">
        <img src="../assets/tiao.png" class="content_lock">
      </div>
      <div class="lock1">
        <img src="../assets/suoxi.png" class="icon">
        <div class="title" @click="clickParent">2元解锁鼻相解读</div>
      </div>
    </div>
    <!-- 解锁后显示全部 -->
    <div class="organs-box organs-box1">
      <div class="organs-title">解锁后鼻子（审辨官）</div>
      <div class="right-fbox">发达顺遂</div>
      <div class="content">
        <img src="../assets/zyou.png">鼻翼两侧丰韵，兰台、廷尉玲珑，鼻子升满东西，才气组，不用太多理财鼻翼两侧丰韵，兰台、廷尉玲珑，鼻子升满东西，才气组，不用太多理财鼻翼两侧丰韵，兰台、廷尉玲珑，鼻子升满东西，才气组，不用太多理财鼻翼两侧丰韵，兰台、廷尉玲珑，鼻子升满东西，才气组，不用太多理财
        <!---->
      </div>
      <!---->
    </div>
    <div class="metal">
      <div class="metal-title">五行面相</div>
      <div class="metal-desc">sdfs/水火型面相</div>
      <div class="metal-box">
        <div class="property property-one">
         <span class="text">水</span>
           <div class="circle-bar">
             <div class="jiesuo-beisd"></div>
            <div class="circle-bar-left"></div>
            <div class="circle-bar-right"></div>
            <!-- 遮罩层，显示百分比 -->
            <div class="mask maskshui">
                <span class="percent shui-percent">70%</span>
            </div>
          </div>
        </div>
         
        <div class="property property-two">
         <span class="text">火</span>
          <div class="circle-bar">
            <div class="jiesuo-huobeis"></div>
              <div class="circle-bar-left"></div>
              <div class="circle-bar-right"></div>
              <!-- 遮罩层，显示百分比 -->
              <div class="mask maskhuo">
                  <span class="percent huo-percent">60%</span>
              </div>
          </div>
        </div>
      </div>
      <div class="desc-title">五行格局</div>
      <div class="desc-box">
        <div class="desc-content">属于入格水形的人，大多体形略丰满，面背较为丰圆、眼大耳大、鼻子丰隆，蒜头鼻也算，地阁圆隆、面色黑而明亮，声音坚实，气舒神稳。</div>
        <div class="desc-content">水火乃相克相化之格。水火既济，官运亨通，运势很旺，富贵双全。</div>
      </div>
    </div>

    <!-- 运势 -->
    <div class="liu-jie-yun">
      <Myreport ref="mychild"></Myreport>
    </div>

    <div class="continer buyreport-box">
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
    <div class="fixed-ewm">
      <img src="../assets/erweima.png">
      <div>长按识别</div>
    </div>
    <!-- 弹出的 -->
   
  </div>
</template>

<script>
import Myreport from "./myreport";
import {Tiaoall,Inte} from "../components/fileall.js";
export default {
  mounted(){    
    Tiaoall();
    Inte(); 
  },
  methods:{
      clickParent() {
        this.$refs.mychild.dji();
      }
    },
  components: {
    Myreport
  }
};

</script>
