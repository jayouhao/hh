<template>
      <!-- 加载的 -->
    <div class="ho-jiazai" ref="jiazai">      
        <img src="../assets/bagua.png" alt="">      
    </div>    
</template>
<script>
export default {
    mounted(){
        if(this.$attrs.a==0){
            this.$refs.jiazai.style.display='none';
        }
    }
}
</script>
