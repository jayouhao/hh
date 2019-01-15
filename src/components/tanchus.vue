<template>
    <div>


 <!-- 弹出的 -->
    <div class="palmistr-tan">
      <div class="weui-mask" style ref="bei"></div>
      <div class="weui-dialog" style ref="nei">
        <div class="weui-dialog__hd">
          <strong class="weui-dialog__title"></strong>
        </div>
        <div class="weui-dialog__bd">
          <div class="zhifu">请选择支付方式</div>
          <a href="javascript:;" @click="qvding" class=" weui-dialog__btn_primary iconfont iconguanbi"></a>
        </div>
         <div class="weui-dialog__bd weui-dialog__ft">
           <span class="iconfont icon-weixin"></span>
          <div>微信支付123小胖狗狗小胖狗狗小胖狗狗小胖狗狗</div>
        </div>
        <div class="weui-dialog__bd weui-dialog__ft">
           <span class="iconfont icon-zhifubao"></span>
          <div>支付宝1</div>
        </div>
      </div>
    </div>

    </div>
</template>
