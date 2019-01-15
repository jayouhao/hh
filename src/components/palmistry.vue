<template>
  <div class="palmistry-box">
    <div class="look-palmistry">
      <img src="../assets/neice.png">
      <span></span>
    </div>
    <div class="title">人工智能看手相</div>
    <div class="info">功能内测中</div>
    <div
      class="desc"
    >“AI人工智能看手相”借助最新掌纹识别提取技术，结合传统手相学典籍和深度神经网络学习技术，可以精准识别并解读符合中国人手相的情感线、婚姻线、健康线、事业线、智慧线等，目前产品正在内测中，敬请期待...</div>
    <button type="button" @click="dji">申请内测资格</button>

    <!-- 弹出的 -->
    <div class="palmistr-tan">
      <div class="weui-mask" style ref="bei"></div>
      <div class="weui-dialog" style ref="nei">
        <div class="weui-dialog__hd">
          <strong class="weui-dialog__title"></strong>
        </div>
        <div class="weui-dialog__bd">
          <div>内测资格暂停发放，正式上线时间请关注“AI面相大师”公众号通知</div>
        </div>
        <div class="weui-dialog__ft">
          <a href="javascript:;" @click="qvding" class="weui-dialog__btn weui-dialog__btn_primary">确定</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    methods:{
        dji(){
            var beijin=this.$refs.bei,nei=this.$refs.nei;    
            nei.classList.remove("pral-do1");    
            nei.style.display="table";
            nei.classList.add("pral-do");
            setTimeout(()=>{
                beijin.style.display="block";
            },300);     
        },
        qvding(){
            var beijin=this.$refs.bei,nei=this.$refs.nei; 
            nei.classList.remove("pral-do");
            nei.classList.add("pral-do1");
            setTimeout(()=>{
                beijin.style.display="none";                
                nei.style.display="none";                
            },200);             
        }
    }
}
</script>
