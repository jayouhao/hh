<template>
  <div class="proxyauthentication-box">
    <div class="auth-code">身份验证码：1128</div>
    <div class="explain">
      <p>添加“秉子”微信</p>
      <p>发送验证码通过验证</p>
    </div>
    <img src="../assets/sfen.png" alt="">
  </div>
</template>

<script>
export default {
    destroyed(){
        this.$router.replace("/index");
    }
}
</script>

