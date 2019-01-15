<template>
  <div>
    <div data-v-3a525940 class="invitecode-box">
      <!-- 背景来的 -->
      <div class="facesr-bei"></div>

      <div data-v-3a525940 class="title-wrapper">
        <div data-v-3a525940 class="title">
          <span data-v-3a525940>{{datas.name}}</span>
        </div>
        <span data-v-3a525940 class="purchase-count">{{datas.ren}}人已购买</span>
      </div>
      <div data-v-3a525940 class="intro1">{{datas.jies1}}</div>
      <div data-v-3a525940 class="intro2" v-if="datas.jies1">{{datas.jies2}}</div>
      <div data-v-3a525940 class="report-intro">
        <div data-v-3a525940 class="intro-title">报告包含内容</div>
        <div data-v-3a525940 class="title-decoration"></div>
        <div data-v-3a525940 class="list">
          <div data-v-3a525940 class="list-item" v-for="(z,i) in datas.baoh"
            :key="i"
            >{{z}}
          </div>          
        </div>
        <div data-v-3a525940 class="purchase-explain">
          <div data-v-3a5259401 class="title">购买说明:</div>
          <div data-v-3a5259401 class="content">事业运程报告已生成, 购买后免费赠送电子版事业运程报告, 购买后即可免费查看</div>
        </div>
      </div>
      <div data-v-3a525940 class="price-list">
        <div data-v-3a525940 class="price-wrapper">
          <div data-v-3a52594012 class="title">需支付</div>
          <div data-v-3a525940 class="price emphasis">¥19.8</div>
        </div>
        <div data-v-3a525940 class="price-wrapper">
          <div data-v-3a52594012 class="title">原价</div>
          <div data-v-3a525940 class="price del">¥39.8</div>
        </div>
        <div data-v-3a525940 class="price-wrapper">
          <div data-v-3a52594012 class="title">优惠券</div>
          <div data-v-3a525940 class="price red">-¥20</div>
        </div>
      </div>
      <button data-v-3a525940 type="button" class="btn-unlock">解锁事业运程报告</button>
    </div>


    <div data-v-3a525940 class="inve13-comment-wrapper">
      <div data-v-3a525940 class="title">
        评论反馈
        <span data-v-3a525940 class="comment-total">(8条)</span>
      </div>
      <div data-v-3a525940 class="comment-list">
        <div data-v-3a525940 v-for="(z,i) in datas.ping" :key="i" class="comment-item">
          <img
            data-v-3a525940
            :src="z.img"
            class="avatar"
          >
          <div data-v-3a525940 class="content-wrapper">
            <div data-v-3a525940 class="name-wrapper">
              <span data-v-3a525940 class="username">{{z.name}}</span>
              <div data-v-3a525940 class="rate">
                <img v-for="(i) in z.xin"
                    :key="i"
                  data-v-3a525940
                  src="../assets/xing.png"
                  class="star"
                >               
              </div>
            </div>
            <div data-v-3a525940 class="text">{{z.cen}}</div>
            <div data-v-3a525940 class="purchase-info">{{z.gou}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 加载中 -->
    <div class="weui-toast" ref="xuniti">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">加载中</p>
      <div class="all-badao"></div>
    </div>

  </div>
</template>
 
 <script>
 import { setTimeout } from 'timers';
 export default {
     created(){
         if(location.hash.includes("gan")){
             this.datas={
                 name:"情感运程报告",
                 ren:"33039",
                 jies1:"眉眼、嘴巴都隐藏着一个人的爱情密码。什么时候能遇上正缘？与伴侣能不能相伴永久？面相可以告诉你....",
                 jies2:"",
                 baoh:["感情运势总述","情感变动年纪","适合的另一半详述"],
                 ping:[
                     {img:"http://tttoss.oss-cn-hangzhou.aliyuncs.com//minapp/face/luckrobotuser/15438183886170.jpg",
                     name:"小确幸",
                     cen:"我的感情是一段孽缘，分分合合。痛彻心扉，这里分析的很对。我的缘分分析的非常全面。事业也是非常准的，还不错吧！",
                     gou:"购买:情感运程报告¥19.80",
                     xin:3
                     }
                 ]                 
             }
         };         
     },
     mounted(){
         this.$refs.xuniti.style.display="block";
         setTimeout(()=>{
            this.$refs.xuniti.style.display="none";
         },530)
     },
     data(){
         return{             
             datas:{
                 name:"事业运程报告",
                 ren:"31513",
                 jies1:"事业是好是坏全部隐藏在额头里, 能否永远屹立不倒财运亨通则看鼻子，对工作的持续性和精力还看嘴唇…",
                 jies2:"面相上看你的事业和财运怎么样? 是否适合创业? 应该选择哪一类工作? 面相可以告诉你!",
                 baoh:["事业运程总述","事业变动年纪","事业择业建议"],
                 ping:[
                     {img:"/static/img/pinto.1923e7e.jpg",
                     name:"忘记所有",
                     cen:"说的跟我的境遇相差无几，经常处在迷茫中，这次看完这个报告，对自己有了更清晰的认识，要努力啊。",
                     gou:"购买:事业运程报告¥19.80",
                     xin:4
                     },
                     {img:"/static/img/pinto.1923e7e.jpg",
                     name:"忘记所有",
                     cen:"说的跟我的境遇相差无几，经常处在迷茫中，这次看完这个报告，对自己有了更清晰的认识，要努力啊。",
                     gou:"购买:事业运程报告¥19.80",
                     xin:4
                     }
                 ]                 
             }
         }
     }
 }
 </script>
 