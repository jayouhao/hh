<template>
    <div class="taking-box">      
        <div class="header">
            <div class="title">拍照/上传</div>
            <div class="content">您可以选择打开相册或直接拍照</div>
        </div>
        <img src="../assets/face.9f8714c.png" mode="aspectFit" class="facepicture">
        <div class="upload">
            <div class="uploadrule">满足以下要求结果更准确</div>
            <div class="rules">
                <div class="rule">正面</div>
                <div class="rule">面部呈现完整</div>
                <div class="rule">无刘海遮挡</div>
                <div class="rule">五官清晰</div>
                <div class="rule">不带眼镜</div>
            </div>
            <div class="uploadbutton" @click="upclick">
                <img src="../assets/下载.png" mode="aspectFill" class="buttonicon">
                <div class="buttontitle">拍照/上传美照</div>
                <input type="file" @change="kaitu" ref="inpu" accept="image/*" class="upload-input">
            </div>
         </div>
    </div>  
</template>
<script>
export default {
    methods:{
       upclick(s){
           this.$refs.inpu.click();        
       },
       kaitu(s){
           console.log(s.target.files[0]);
           this.$router.push('/tosubmit');
       }
    }
}
</script>
