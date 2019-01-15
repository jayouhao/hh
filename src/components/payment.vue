<template>
    <div class="paybox">
        <div class="paycontainer">
            <img src="../assets/ai.png" class="logo">
            <div class="title">AI面相大师</div>
            <div class="content" style="margin-top: 1.5rem;">1.如果你想取消付款或遇特殊原因无法完成付款，请点击“取消付款”;</div>
            <div class="content">2.如果你已完成，请点击“已完成付款”;</div>
            <button class="cancelbutton">取消付款</button>
            <button class="confirmbutton wancheng">已完成付款</button>
        </div>
        <!-- 加载中 -->
    <div class="weui-toast" ref="xuniti">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">正在生成订单</p>
      <div class="all-badao"></div>
    </div>
    </div>
</template>
<script>
export default {
     mounted(){
         this.$refs.xuniti.style.display="block";
         setTimeout(()=>{
            this.$refs.xuniti.style.display="none";
         },530)
     },
}
</script>

